import { todoHandler } from './todo-task';

export let domHandler = (() => {

    window.addEventListener('click', (e) => {
        let modal = document.querySelector('.modal');
        if(e.target === modal){
            e.target.style.display = 'none';
        }
    });

    let deleteTask = (e) => {
        let content = document.querySelector('.content');
        content.removeChild(e.target.parentElement.parentElement.parentElement)
    }

    let showDetails = (e) => {

        let taskContainer = e.target.parentElement.parentElement.querySelector('.task');
        let task = todoHandler.getToDoList().find((element) => element.title === taskContainer.textContent);
        console.log(taskContainer.textContent);
    
        let modal = document.querySelector('.modal');

        let taskTitle = document.querySelector('#task-title');
        let description = document.querySelector('#description');
        let priority = document.querySelector('#priority');
        let dueDate = document.querySelector('#due-date');


        taskTitle.textContent = task.title;
        description.textContent = task.description;
        priority.textContent = task.priority;
        dueDate.textContent = task.dueDate;

        modal.style.display = 'block';
    }

    let renderContent = () => {
        let content = document.querySelector('.content');

        todoHandler.getToDoList().forEach(element => {
            let taskContainer = document.createElement('div');
            taskContainer.classList.add('task-container');

            let task = document.createElement('span');
            task.textContent = element.title;
            task.classList.add('task');

            let buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('buttons-container');

            let detailsButton = document.createElement('button');
            detailsButton.textContent = 'Details';
            detailsButton.id = 'details';
            detailsButton.addEventListener('click', e => showDetails(e));

            let iconsContainer = document.createElement('div');
            iconsContainer.classList.add('icons-container');

            let editIcon = document.createElement('span');
            editIcon.classList.add('material-icons', 'icon');
            editIcon.textContent = 'edit_note';

            let delIcon = document.createElement('span');
            delIcon.classList.add('material-icons', 'icon');
            delIcon.textContent = 'delete';

            delIcon.addEventListener('click', e => deleteTask(e));

            iconsContainer.append(editIcon, delIcon);
            buttonsContainer.append(detailsButton, iconsContainer);
            taskContainer.append(task, buttonsContainer);
            content.append(taskContainer);
        });
    }

    return {
        renderContent
    }

})();