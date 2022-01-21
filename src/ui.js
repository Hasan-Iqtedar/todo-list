import { todoHandler } from './todo-task';
import { modalHandler } from './modal'

export let domHandler = (() => {

    let exampleProject = document.querySelector('#example-project');
    let activeProject;

    let addProjectButton = document.querySelector('#add-project-button');
    let addTaskButton = document.querySelector('#add-task-button');
    let addProjectSubmitButton = document.querySelector('#add-project-submit-button');
    let addTaskSubmitButton = document.querySelector('#add-task-submit-button');

    exampleProject.addEventListener('click', (e) => {
        activeProject.style.backgroundColor = '';
        renderContent(e.currentTarget);
    });

    addProjectButton.addEventListener('click', () => modalHandler.showAddProjectModal());
    addProjectSubmitButton.addEventListener('click', () => submitNewProject());
    addTaskSubmitButton.addEventListener('click', () => submitNewTask());

    addTaskButton.addEventListener('click', () => {

        let addProject = document.querySelector('#add-project');
        addProject.value = activeProject.getElementsByTagName('span')[0].textContent;
        modalHandler.showAddTaskModal()
    });


    let deleteTask = (e) => {
        let listContainer = document.querySelector('#list-container');
        let task = e.target.parentElement.parentElement.parentElement;
        let title = task.querySelector('.task').textContent;
        listContainer.removeChild(task);
        todoHandler.deleteTodo(todoHandler.findIndex(title));
    }

    let addNewTask = (title, index) => {

        let listContainer = document.querySelector('#list-container');

        let taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        let checkBox = document.createElement('div');
        checkBox.classList.add('checkbox');
        checkBox.addEventListener('click', () => checkBox.classList.contains('checkbox-checked') ? checkBox.classList.remove('checkbox-checked') : checkBox.classList.add('checkbox-checked'));

        let task = document.createElement('span');
        task.textContent = title;
        task.classList.add('task');
        task.setAttribute('data-index', index);

        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container');

        let detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        detailsButton.id = 'details';
        detailsButton.addEventListener('click', e => modalHandler.showDetails(e));

        let iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons-container');

        let editIcon = document.createElement('span');
        editIcon.classList.add('material-icons', 'icon');
        editIcon.textContent = 'edit_note';
        editIcon.addEventListener('click', (e) => modalHandler.editDetails(e));

        let delIcon = document.createElement('span');
        delIcon.classList.add('material-icons', 'icon');
        delIcon.textContent = 'delete';
        delIcon.addEventListener('click', e => deleteTask(e));

        iconsContainer.append(editIcon, delIcon);
        buttonsContainer.append(detailsButton, iconsContainer);
        taskContainer.append(checkBox, task, buttonsContainer);
        listContainer.append(taskContainer);
    }

    let submitNewProject = () => {
        let projectName = document.querySelector('#add-project-name').value;
        let projectsContainer = document.querySelector('#projects-container');

        if (projectName !== '') {
            let newProject = document.createElement('div');
            let projectTitle = document.createElement('span');
            let delIcon = document.createElement('span');

            newProject.classList.add('project');
            delIcon.classList.add('icon', 'material-icons');

            delIcon.textContent = 'delete';
            projectTitle.textContent = projectName;
            newProject.append(projectTitle, delIcon);

            newProject.addEventListener('click', (e) => {
                activeProject.style.backgroundColor = '';
                renderContent(e.currentTarget, projectName)
            });

            delIcon.addEventListener('click', (e) => deleteProject(e));

            projectsContainer.append(newProject);
            modalHandler.clearAddProjectForm();
        }

        modalHandler.hideAddProjectModal();
    }

    let submitNewTask = () => {
        let addTitle = document.querySelector('#add-title').value;
        let addDescription = document.querySelector('#add-description').value;
        let addPriority = document.querySelector('#add-priority').value;
        let addDueDate = document.querySelector('#add-due-date').value;
        let addProject = document.querySelector('#add-project').value;

        if (addTitle !== '' && addDescription !== '' &&
            addPriority !== '' && addDueDate !== '' && addProject !== '') {

            addNewTask(addTitle, todoHandler.getToDoList().length);
            todoHandler.createTodo(
                addTitle, addDescription, addDueDate,
                addPriority, addProject);
        }
        modalHandler.hideAddTaskModal();
        modalHandler.clearAddTaskForm();
    }

    let deleteProject = (e) => {
        e.stopPropagation();
        let projectsContainer = document.querySelector('#projects-container');
        let projectToBeDeleted = e.currentTarget.parentElement;

        let projectTitle = projectToBeDeleted.getElementsByTagName('span')[0].textContent;

        todoHandler.getToDoList().forEach((element, index) => {
            if (element.project === projectTitle) {
                todoHandler.deleteTodo(index);
            }
        });

        projectsContainer.removeChild(projectToBeDeleted);
        renderContent();
    }

    let renderContent = (target = exampleProject, projectTitle = 'Example Project') => {
        target.style.backgroundColor = 'rgba(204, 177, 188, 0.8)';
        activeProject = target;

        let listContainer = document.querySelector('#list-container');
        listContainer.innerHTML = '';

        todoHandler.getToDoList().forEach((element, index) => {
            if (element.project === projectTitle) {
                addNewTask(element.title, index);
            }
        });
    }

    return {
        renderContent
    }

})();