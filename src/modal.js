import { todoHandler } from './todo-task';

export let modalHandler = (() => {

    let detailsModal = document.querySelector('#details-modal');
    let editModal = document.querySelector('#edit-modal');

    window.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
            detailsModal.style.display = 'none';
        }
        else if (e.target === editModal) {
            editModal.style.display = 'none';
            modalHandler.clearEditForm();
        }
    });

    let clearEditForm = () => {
        document.querySelector('#edit-title').value = '';
        document.querySelector('#edit-description').value = '';
        document.querySelector('#edit-priority').value = '';
        document.querySelector('#edit-due-date').value = '';
    }

    let showDetails = (e) => {

        let taskContainer = e.target.parentElement.parentElement.querySelector('.task');
        let task = todoHandler.getToDoList()[taskContainer.getAttribute('data-index')];

        let taskTitle = document.querySelector('#task-title');
        let description = document.querySelector('#description');
        let priority = document.querySelector('#priority');
        let dueDate = document.querySelector('#due-date');

        taskTitle.textContent = task.title;
        description.textContent = task.description;
        priority.textContent = task.priority;
        dueDate.textContent = task.dueDate;

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

        if (editTitle.value !== '' && editDescription.value !== ''
            && editPriority.value !== '' && editDueDate.value !== '') {

            let taskIndex = e.target.getAttribute('data-index');
            let task = document.querySelector(`span[data-index='${taskIndex}']`);
            todoHandler.updateTaskDetails(
                task.textContent, editTitle.value,
                editDescription.value, editPriority.value,
                editDueDate.value);

            task.textContent = editTitle.value;
        }

        modalHandler.clearEditForm();
        editModal.style.display = 'none';
    }

    let updateDetailsSubmitButton = document.querySelector('#edit-submit-button');
    updateDetailsSubmitButton.addEventListener('click', e => updateDetails(e));

    return {
        clearEditForm,
        showDetails,
        editDetails,
    }

})();