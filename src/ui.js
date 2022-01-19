import { todoHandler } from './todo-task';

export let domHandler = (() => {

    let deleteTask = (e) => {
        let content = document.querySelector('.content');
        content.removeChild(e.target.parentElement.parentElement.parentElement)
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