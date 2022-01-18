export class TodoTask {
    constructor(title, description, due_date, priority) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.priority = priority;
    }
}

export let todoHandler = (() => {

    let todoList = [];

    let createTodo = (title, description, due_date, priority) => {
        todoList.push(new TodoTask(title, description, due_date, priority));
    };

    let changeToDoPriority = (title, priority) => {
        todoList.forEach((element) => {
            if (element.title === title) {
                element.priority = priority;
            }
        })
    };

    let deleteTodo = (title) => {
        todoList = todoList.filter(element => element.title !== title);
    };

    let updateDate = (title, date) => {
        todoList.forEach((element) => {
            if (element.title === title) {
                element.due_date = date;
            }
        })
    }

    let getToDoList = () => {
        return todoList;
    }

    return {
        getToDoList,
        createTodo,
        changeToDoPriority,
        updateDate,
        deleteTodo
    }

})();
