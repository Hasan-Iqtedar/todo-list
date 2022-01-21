export class TodoTask {
    constructor(title, description, due_date, priority, project = 'Example Project') {
        this.title = title;
        this.description = description;
        this.dueDate = due_date;
        this.priority = priority;
        this.project = project;
    }
}

export let todoHandler = (() => {

    let todoList = [];

    let createTodo = (title, description, due_date, priority, project) => {
        todoList.push(new TodoTask(title, description, due_date, priority, project));
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

    let updateProject = (index, newProject) => {
        todoList[index].project = newProject;
    }

    let updateTaskDetails = (title, newTitle, newDescription, newPriority, newDueDate, newProject) => {
        let index = findIndex(title);
        
        updateTitle(index, newTitle);
        updateDescription(index, newDescription);
        updatePriority(index, newPriority);
        updateDate(index, newDueDate);
        updateProject(index, newProject);
    }

    let deleteTodo = (index) => {
        console.log(index);
        todoList.splice(index, 1);
    };

    let getToDoList = () => {
        return todoList;
    }

    return {
        getToDoList,
        createTodo,
        updateTaskDetails,
        deleteTodo,
        findIndex,
    }

})();
