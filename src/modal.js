import { todoHandler } from './todo-task';

export let modalHandler = (() => {

    let detailsModal = document.querySelector('#details-modal');
    let editModal = document.querySelector('#edit-modal');
    let addTaskModal = document.querySelector('#add-task-modal');
    let addProjectModal = document.querySelector('#add-project-modal');

    window.addEventListener('click', (e) => {

        switch (e.target) {
            case detailsModal: hideDetailsModal();
            case editModal: hideEditModal(); clearEditForm();
            case addTaskModal: hideAddTaskModal(); clearAddTaskForm();
            case addProjectModal: hideAddProjectModal(); clearAddProjectForm();
        }

    });

    let clearEditForm = () => {
        document.querySelector('#edit-title').value = '';
        document.querySelector('#edit-description').value = '';
        document.querySelector('#edit-priority').value = '';
        document.querySelector('#edit-due-date').value = '';
        document.querySelector('#edit-project').value = '';
    }

    let clearAddProjectForm = () => {
        document.querySelector('#add-project-name').value = '';
    }

    let clearAddTaskForm = () => {
        document.querySelector('#add-title').value = '';
        document.querySelector('#add-description').value = '';
        document.querySelector('#add-priority').value = '';
        document.querySelector('#add-due-date').value = '';
        document.querySelector('#add-project').value = '';
    }

    let showDetails = (e) => {

        let task = e.target.parentElement.parentElement.querySelector('.task');
        let todo = todoHandler.getToDoList()[todoHandler.findIndex(task.textContent)];


        let taskTitle = document.querySelector('#task-title');
        let description = document.querySelector('#description');
        let priority = document.querySelector('#priority');
        let dueDate = document.querySelector('#due-date');
        let project = document.querySelector('#project-field');

        taskTitle.textContent = todo.title;
        description.textContent = todo.description;
        priority.textContent = todo.priority;
        dueDate.textContent = todo.dueDate;
        project.textContent = todo.project;

        detailsModal.style.display = 'block';
    }

    let editDetails = (e) => {
        let title = editModal.querySelector('#edit-details-title');
        let taskContainer = e.target.parentElement.parentElement.parentElement.querySelector('.task');
        let submitButton = editModal.querySelector('#edit-submit-button');
        submitButton.setAttribute('data-index', taskContainer.getAttribute('data-index'));
        title.textContent = taskContainer.textContent;

        editModal.style.display = 'block';
    }

    let updateDetails = (e) => {
        let editTitle = document.querySelector('#edit-title');
        let editDescription = document.querySelector('#edit-description');
        let editPriority = document.querySelector('#edit-priority');
        let editDueDate = document.querySelector('#edit-due-date');
        let editProject = document.querySelector('#edit-project');

        if (editTitle.value !== '' && editDescription.value !== ''
            && editPriority.value !== '' && editDueDate.value !== '' && editProject !== '') {

            let taskIndex = e.target.getAttribute('data-index');
            let task = document.querySelector(`span[data-index='${taskIndex}']`);
            todoHandler.updateTaskDetails(
                task.textContent, editTitle.value,
                editDescription.value, editPriority.value,
                editDueDate.value, editProject.value);

            task.textContent = editTitle.value;
        }

        modalHandler.clearEditForm();
        editModal.style.display = 'none';
    }

    let showAddProjectModal = () => {
        addProjectModal.style.display = 'block';
    }

    let showAddTaskModal = () => {
        addTaskModal.style.display = 'block';
    }

    let hideDetailsModal = () => {
        detailsModal.style.display = 'none';
    }

    let hideEditModal = () => {
        editModal.style.display = 'none';
    }

    let hideAddTaskModal = () => {
        addTaskModal.style.display = 'none';
    }

    let hideAddProjectModal = () => {
        addProjectModal.style.display = 'none';
    }

    let updateDetailsSubmitButton = document.querySelector('#edit-submit-button');

    updateDetailsSubmitButton.addEventListener('click', e => updateDetails(e));

    return {
        clearEditForm,
        clearAddProjectForm,
        clearAddTaskForm,
        showDetails,
        editDetails,
        showAddProjectModal,
        showAddTaskModal,
        hideAddProjectModal,
        hideAddTaskModal,
    }

})();