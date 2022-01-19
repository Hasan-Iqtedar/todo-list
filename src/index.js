import { todoHandler } from './todo-task'
import {domHandler} from './ui';


todoHandler.createTodo("Project", "Finish the project", "18-1-22", "1");
todoHandler.createTodo("Project2", "Finish project2", "18-1-22", "2");

console.table(todoHandler.getToDoList());

// todoHandler.updateDate("Project", 10);
// todoHandler.updateDate("Project", "19-1-22");
// console.table(todoHandler.getToDoList());

domHandler.renderContent();
