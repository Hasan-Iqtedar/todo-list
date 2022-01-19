import { todoHandler } from './todo-task';
import { modalHandler } from './modal'

export let domHandler = (() => {

    let deleteTask = (e) => {
        let content = document.querySelector('.content');
        let task = e.target.parentElement.parentElement.parentElement;
        let title = task.querySelector('.task').textContent;
        content.removeChild(task);
        todoHandler.deleteTodo(title);
    }

    let addNewTask = () => {
        let title = document.querySelector('')
    }

    let renderContent = () => {
        let content = document.querySelector('.content');

        todoHandler.getToDoList().forEach((element, index) => {
            let taskContainer = document.createElement('div');
            taskContainer.classList.add('task-container');

            let task = document.createElement('span');
            task.textContent = element.title;
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
            taskContainer.append(task, buttonsContainer);
            content.append(taskContainer);
        });
    }

    return {
        renderContent
    }

})();