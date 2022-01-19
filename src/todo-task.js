export class TodoTask {
    constructor(title, description, due_date, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = due_date;
        this.priority = priority;
    }
}

export let todoHandler = (() => {

    let todoList = [];

    let createTodo = (title, description, due_date, priority) => {
        todoList.push(new TodoTask(title, description, due_date, priority));
    };

    let findIndex = title => todoList.findIndex(element => element.title === title);

    let updateTitle = (index, newTitle) => {
        todoList[index].title = newTitle;
    }

    let updateDescription = (index, description) => {
        todoList[index].description = description;
    }

    let updatePriority = (index, priority) => {
        todoList[index].priority = priority;
    };

    let updateDate = (index, date) => {
        todoList[index].dueDate = date;
    }

    let updateTaskDetails = (title, newTitle, newDescription, newPriority, newDueDate) => {
        let index = findIndex(title);
        
        updateTitle(index, newTitle);
        updateDescription(index, newDescription);
        updatePriority(index, newPriority);
        updateDate(index, newDueDate);
    }

    let deleteTodo = (title) => {
        todoList = todoList.filter(element => element.title !== title);
    };

    let getToDoList = () => {
        return todoList;
    }

    return {
        getToDoList,
        createTodo,
        updateTaskDetails,
        deleteTodo
    }

})();
