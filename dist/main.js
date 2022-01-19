/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.createTodo(\"Project\", \"Finish the project\", \"18-1-22\", \"1\");\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.createTodo(\"Project2\", \"Finish project2\", \"18-1-22\", \"2\");\n\nconsole.table(_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList());\n\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.changeToDoPriority(\"Project\", 10);\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.updateDate(\"Project\", \"19-1-22\");\nconsole.table(_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList());\n\n_ui__WEBPACK_IMPORTED_MODULE_1__.domHandler.renderContent();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo-task.js":
/*!**************************!*\
  !*** ./src/todo-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoTask\": () => (/* binding */ TodoTask),\n/* harmony export */   \"todoHandler\": () => (/* binding */ todoHandler)\n/* harmony export */ });\nclass TodoTask {\n    constructor(title, description, due_date, priority) {\n        this.title = title;\n        this.description = description;\n        this.due_date = due_date;\n        this.priority = priority;\n    }\n}\n\nlet todoHandler = (() => {\n\n    let todoList = [];\n\n    let createTodo = (title, description, due_date, priority) => {\n        todoList.push(new TodoTask(title, description, due_date, priority));\n    };\n\n    let changeToDoPriority = (title, priority) => {\n        todoList.forEach((element) => {\n            if (element.title === title) {\n                element.priority = priority;\n            }\n        })\n    };\n\n    let deleteTodo = (title) => {\n        todoList = todoList.filter(element => element.title !== title);\n    };\n\n    let updateDate = (title, date) => {\n        todoList.forEach((element) => {\n            if (element.title === title) {\n                element.due_date = date;\n            }\n        })\n    }\n\n    let getToDoList = () => {\n        return todoList;\n    }\n\n    return {\n        getToDoList,\n        createTodo,\n        changeToDoPriority,\n        updateDate,\n        deleteTodo\n    }\n\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/todo-task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domHandler\": () => (/* binding */ domHandler)\n/* harmony export */ });\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n\n\nlet domHandler = (() => {\n\n    let deleteTask = (e) => {\n        let content = document.querySelector('.content');\n        content.removeChild(e.target.parentElement.parentElement.parentElement)\n    }\n\n    let renderContent = () => {\n        let content = document.querySelector('.content');\n\n        _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList().forEach(element => {\n            let taskContainer = document.createElement('div');\n            taskContainer.classList.add('task-container');\n\n            let task = document.createElement('span');\n            task.textContent = element.title;\n            task.classList.add('task');\n\n            let buttonsContainer = document.createElement('div');\n            buttonsContainer.classList.add('buttons-container');\n\n            let detailsButton = document.createElement('button');\n            detailsButton.textContent = 'Details';\n            detailsButton.id = 'details';\n\n            let iconsContainer = document.createElement('div');\n            iconsContainer.classList.add('icons-container');\n\n            let editIcon = document.createElement('span');\n            editIcon.classList.add('material-icons', 'icon');\n            editIcon.textContent = 'edit_note';\n\n            let delIcon = document.createElement('span');\n            delIcon.classList.add('material-icons', 'icon');\n            delIcon.textContent = 'delete';\n\n            delIcon.addEventListener('click', e => deleteTask(e));\n\n            iconsContainer.append(editIcon, delIcon);\n            buttonsContainer.append(detailsButton, iconsContainer);\n            taskContainer.append(task, buttonsContainer);\n            content.append(taskContainer);\n        });\n    }\n\n    return {\n        renderContent\n    }\n\n})();\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;