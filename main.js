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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.createTodo(\"Project\", \"Finish the project\", \"18-1-22\", \"1\");\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.createTodo(\"Project2\", \"Finish project2\", \"18-1-22\", \"2\");\n\nconsole.table(_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList());\n\n// todoHandler.updateDate(\"Project\", 10);\n// todoHandler.updateDate(\"Project\", \"19-1-22\");\n// console.table(todoHandler.getToDoList());\n\n_ui__WEBPACK_IMPORTED_MODULE_1__.domHandler.renderContent();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalHandler\": () => (/* binding */ modalHandler)\n/* harmony export */ });\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n\n\nlet modalHandler = (() => {\n\n    let detailsModal = document.querySelector('#details-modal');\n    let editModal = document.querySelector('#edit-modal');\n\n    window.addEventListener('click', (e) => {\n        if (e.target === detailsModal) {\n            detailsModal.style.display = 'none';\n        }\n        else if (e.target === editModal) {\n            editModal.style.display = 'none';\n            modalHandler.clearEditForm();\n        }\n    });\n\n    let clearEditForm = () => {\n        document.querySelector('#edit-title').value = '';\n        document.querySelector('#edit-description').value = '';\n        document.querySelector('#edit-priority').value = '';\n        document.querySelector('#edit-due-date').value = '';\n    }\n\n    let showDetails = (e) => {\n\n        let taskContainer = e.target.parentElement.parentElement.querySelector('.task');\n        let task = _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList()[taskContainer.getAttribute('data-index')];\n\n        let taskTitle = document.querySelector('#task-title');\n        let description = document.querySelector('#description');\n        let priority = document.querySelector('#priority');\n        let dueDate = document.querySelector('#due-date');\n\n        taskTitle.textContent = task.title;\n        description.textContent = task.description;\n        priority.textContent = task.priority;\n        dueDate.textContent = task.dueDate;\n\n        detailsModal.style.display = 'block';\n    }\n\n    let editDetails = (e) => {\n        let title = editModal.querySelector('#edit-details-title');\n        let taskContainer = e.target.parentElement.parentElement.parentElement.querySelector('.task');\n        let submitButton = editModal.querySelector('#edit-submit-button');\n        submitButton.setAttribute('data-index', taskContainer.getAttribute('data-index'));\n        title.textContent = taskContainer.textContent;\n\n        editModal.style.display = 'block';\n    }\n\n    let updateDetails = (e) => {\n        let editTitle = document.querySelector('#edit-title');\n        let editDescription = document.querySelector('#edit-description');\n        let editPriority = document.querySelector('#edit-priority');\n        let editDueDate = document.querySelector('#edit-due-date');\n\n        if (editTitle.value !== '' && editDescription.value !== ''\n            && editPriority.value !== '' && editDueDate.value !== '') {\n\n            let taskIndex = e.target.getAttribute('data-index');\n            let task = document.querySelector(`span[data-index='${taskIndex}']`);\n            _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.updateTaskDetails(\n                task.textContent, editTitle.value,\n                editDescription.value, editPriority.value,\n                editDueDate.value);\n\n            task.textContent = editTitle.value;\n        }\n\n        modalHandler.clearEditForm();\n        editModal.style.display = 'none';\n    }\n\n    let updateDetailsSubmitButton = document.querySelector('#edit-submit-button');\n    updateDetailsSubmitButton.addEventListener('click', e => updateDetails(e));\n\n    return {\n        clearEditForm,\n        showDetails,\n        editDetails,\n    }\n\n})();\n\n//# sourceURL=webpack://todo-list/./src/modal.js?");

/***/ }),

/***/ "./src/todo-task.js":
/*!**************************!*\
  !*** ./src/todo-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoTask\": () => (/* binding */ TodoTask),\n/* harmony export */   \"todoHandler\": () => (/* binding */ todoHandler)\n/* harmony export */ });\nclass TodoTask {\n    constructor(title, description, due_date, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = due_date;\n        this.priority = priority;\n    }\n}\n\nlet todoHandler = (() => {\n\n    let todoList = [];\n\n    let createTodo = (title, description, due_date, priority) => {\n        todoList.push(new TodoTask(title, description, due_date, priority));\n    };\n\n    let findIndex = title => todoList.findIndex(element => element.title === title);\n\n    let updateTitle = (index, newTitle) => {\n        todoList[index].title = newTitle;\n    }\n\n    let updateDescription = (index, description) => {\n        todoList[index].description = description;\n    }\n\n    let updatePriority = (index, priority) => {\n        todoList[index].priority = priority;\n    };\n\n    let updateDate = (index, date) => {\n        todoList[index].dueDate = date;\n    }\n\n    let updateTaskDetails = (title, newTitle, newDescription, newPriority, newDueDate) => {\n        let index = findIndex(title);\n        \n        updateTitle(index, newTitle);\n        updateDescription(index, newDescription);\n        updatePriority(index, newPriority);\n        updateDate(index, newDueDate);\n    }\n\n    let deleteTodo = (title) => {\n        todoList = todoList.filter(element => element.title !== title);\n    };\n\n    let getToDoList = () => {\n        return todoList;\n    }\n\n    return {\n        getToDoList,\n        createTodo,\n        updateTaskDetails,\n        deleteTodo\n    }\n\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/todo-task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domHandler\": () => (/* binding */ domHandler)\n/* harmony export */ });\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\nlet domHandler = (() => {\n\n    let deleteTask = (e) => {\n        let content = document.querySelector('.content');\n        let task = e.target.parentElement.parentElement.parentElement;\n        let title = task.querySelector('.task').textContent;\n        content.removeChild(task);\n        _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.deleteTodo(title);\n    }\n\n    let addNewTask = () => {\n        let title = document.querySelector('')\n    }\n\n    let renderContent = () => {\n        let content = document.querySelector('.content');\n\n        _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList().forEach((element, index) => {\n            let taskContainer = document.createElement('div');\n            taskContainer.classList.add('task-container');\n\n            let task = document.createElement('span');\n            task.textContent = element.title;\n            task.classList.add('task');\n            task.setAttribute('data-index', index);\n\n            let buttonsContainer = document.createElement('div');\n            buttonsContainer.classList.add('buttons-container');\n\n            let detailsButton = document.createElement('button');\n            detailsButton.textContent = 'Details';\n            detailsButton.id = 'details';\n            detailsButton.addEventListener('click', e => _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.showDetails(e));\n\n            let iconsContainer = document.createElement('div');\n            iconsContainer.classList.add('icons-container');\n\n            let editIcon = document.createElement('span');\n            editIcon.classList.add('material-icons', 'icon');\n            editIcon.textContent = 'edit_note';\n            editIcon.addEventListener('click', (e) => _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.editDetails(e));\n\n            let delIcon = document.createElement('span');\n            delIcon.classList.add('material-icons', 'icon');\n            delIcon.textContent = 'delete';\n            delIcon.addEventListener('click', e => deleteTask(e));\n\n            iconsContainer.append(editIcon, delIcon);\n            buttonsContainer.append(detailsButton, iconsContainer);\n            taskContainer.append(task, buttonsContainer);\n            content.append(taskContainer);\n        });\n    }\n\n    return {\n        renderContent\n    }\n\n})();\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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