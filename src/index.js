import { todoHandler } from './todo-task'
import {domHandler} from './ui';


todoHandler.createTodo("Finish Project", "Finish the project soon", "18-1-22", "High");
todoHandler.createTodo("Finish All Projects", "Finish all projects ;-;", "18-1-22", "High");

domHandler.renderContent();
