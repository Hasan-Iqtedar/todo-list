import TodoTask from './todo-task'

let todoHandler = (() => {

    let todoList = [];

    let createTodo = (title, description, due_date, priority) => {
        todoList.push(new TodoTask(title, description, due_date, priority));
    };
    
    let changeToDoPriority = (title, priority) => {
        todoList.forEach((element) => {
            if (element.title === title ) {
                element.priority = priority;
            } 
        })
    };

    let deleteTodo = (title) => {
        todoList = todoList.filter(element => element.title !== title);
    };

    let updateDate = (title, date) => {
        todoList.forEach((element) => {
            if (element.title === title ) {
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

todoHandler.createTodo("Project", "Finish the project", "18-1-22", "1");
todoHandler.createTodo("Project2", "Finish project2", "18-1-22", "2");

console.table(todoHandler.getToDoList());

todoHandler.changeToDoPriority("Project", 10);
todoHandler.updateDate("Project", "19-1-22");
console.table(todoHandler.getToDoList());

todoHandler.deleteTodo("Project");
console.table(todoHandler.getToDoList());