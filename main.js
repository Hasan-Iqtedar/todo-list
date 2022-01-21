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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.createTodo(\"Finish Project\", \"Finish the project soon\", \"18-1-22\", \"High\");\n_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.createTodo(\"Finish All Projects\", \"Finish all projects ;-;\", \"18-1-22\", \"High\");\n\n_ui__WEBPACK_IMPORTED_MODULE_1__.domHandler.renderContent();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalHandler\": () => (/* binding */ modalHandler)\n/* harmony export */ });\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n\n\nlet modalHandler = (() => {\n\n    let detailsModal = document.querySelector('#details-modal');\n    let editModal = document.querySelector('#edit-modal');\n    let addTaskModal = document.querySelector('#add-task-modal');\n    let addProjectModal = document.querySelector('#add-project-modal');\n\n    window.addEventListener('click', (e) => {\n\n        switch (e.target) {\n            case detailsModal: hideDetailsModal();\n            case editModal: hideEditModal(); clearEditForm();\n            case addTaskModal: hideAddTaskModal(); clearAddTaskForm();\n            case addProjectModal: hideAddProjectModal(); clearAddProjectForm();\n        }\n\n    });\n\n    let clearEditForm = () => {\n        document.querySelector('#edit-title').value = '';\n        document.querySelector('#edit-description').value = '';\n        document.querySelector('#edit-priority').value = '';\n        document.querySelector('#edit-due-date').value = '';\n        document.querySelector('#edit-project').value = '';\n    }\n\n    let clearAddProjectForm = () => {\n        document.querySelector('#add-project-name').value = '';\n    }\n\n    let clearAddTaskForm = () => {\n        document.querySelector('#add-title').value = '';\n        document.querySelector('#add-description').value = '';\n        document.querySelector('#add-priority').value = '';\n        document.querySelector('#add-due-date').value = '';\n        document.querySelector('#add-project').value = '';\n    }\n\n    let showDetails = (e) => {\n\n        let task = e.target.parentElement.parentElement.querySelector('.task');\n        let todo = _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList()[_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.findIndex(task.textContent)];\n\n\n        let taskTitle = document.querySelector('#task-title');\n        let description = document.querySelector('#description');\n        let priority = document.querySelector('#priority');\n        let dueDate = document.querySelector('#due-date');\n        let project = document.querySelector('#project-field');\n\n        taskTitle.textContent = todo.title;\n        description.textContent = todo.description;\n        priority.textContent = todo.priority;\n        dueDate.textContent = todo.dueDate;\n        project.textContent = todo.project;\n\n        detailsModal.style.display = 'block';\n    }\n\n    let editDetails = (e) => {\n        let title = editModal.querySelector('#edit-details-title');\n        let taskContainer = e.target.parentElement.parentElement.parentElement.querySelector('.task');\n        let submitButton = editModal.querySelector('#edit-submit-button');\n        submitButton.setAttribute('data-index', taskContainer.getAttribute('data-index'));\n        title.textContent = taskContainer.textContent;\n\n        editModal.style.display = 'block';\n    }\n\n    let updateDetails = (e) => {\n        let editTitle = document.querySelector('#edit-title');\n        let editDescription = document.querySelector('#edit-description');\n        let editPriority = document.querySelector('#edit-priority');\n        let editDueDate = document.querySelector('#edit-due-date');\n        let editProject = document.querySelector('#edit-project');\n\n        if (editTitle.value !== '' && editDescription.value !== ''\n            && editPriority.value !== '' && editDueDate.value !== '' && editProject !== '') {\n\n            let taskIndex = e.target.getAttribute('data-index');\n            let task = document.querySelector(`span[data-index='${taskIndex}']`);\n            _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.updateTaskDetails(\n                task.textContent, editTitle.value,\n                editDescription.value, editPriority.value,\n                editDueDate.value, editProject.value);\n\n            task.textContent = editTitle.value;\n        }\n\n        modalHandler.clearEditForm();\n        editModal.style.display = 'none';\n    }\n\n    let showAddProjectModal = () => {\n        addProjectModal.style.display = 'block';\n    }\n\n    let showAddTaskModal = () => {\n        addTaskModal.style.display = 'block';\n    }\n\n    let hideDetailsModal = () => {\n        detailsModal.style.display = 'none';\n    }\n\n    let hideEditModal = () => {\n        editModal.style.display = 'none';\n    }\n\n    let hideAddTaskModal = () => {\n        addTaskModal.style.display = 'none';\n    }\n\n    let hideAddProjectModal = () => {\n        addProjectModal.style.display = 'none';\n    }\n\n    let updateDetailsSubmitButton = document.querySelector('#edit-submit-button');\n\n    updateDetailsSubmitButton.addEventListener('click', e => updateDetails(e));\n\n    return {\n        clearEditForm,\n        clearAddProjectForm,\n        clearAddTaskForm,\n        showDetails,\n        editDetails,\n        showAddProjectModal,\n        showAddTaskModal,\n        hideAddProjectModal,\n        hideAddTaskModal,\n    }\n\n})();\n\n//# sourceURL=webpack://todo-list/./src/modal.js?");

/***/ }),

/***/ "./src/todo-task.js":
/*!**************************!*\
  !*** ./src/todo-task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoTask\": () => (/* binding */ TodoTask),\n/* harmony export */   \"todoHandler\": () => (/* binding */ todoHandler)\n/* harmony export */ });\nclass TodoTask {\n    constructor(title, description, due_date, priority, project = 'Example Project') {\n        this.title = title;\n        this.description = description;\n        this.dueDate = due_date;\n        this.priority = priority;\n        this.project = project;\n    }\n}\n\nlet todoHandler = (() => {\n\n    let todoList = [];\n\n    let createTodo = (title, description, due_date, priority, project) => {\n        todoList.push(new TodoTask(title, description, due_date, priority, project));\n    };\n\n    let findIndex = title => todoList.findIndex(element => element.title === title);\n\n    let updateTitle = (index, newTitle) => {\n        todoList[index].title = newTitle;\n    }\n\n    let updateDescription = (index, description) => {\n        todoList[index].description = description;\n    }\n\n    let updatePriority = (index, priority) => {\n        todoList[index].priority = priority;\n    };\n\n    let updateDate = (index, date) => {\n        todoList[index].dueDate = date;\n    }\n\n    let updateProject = (index, newProject) => {\n        todoList[index].project = newProject;\n    }\n\n    let updateTaskDetails = (title, newTitle, newDescription, newPriority, newDueDate, newProject) => {\n        let index = findIndex(title);\n        \n        updateTitle(index, newTitle);\n        updateDescription(index, newDescription);\n        updatePriority(index, newPriority);\n        updateDate(index, newDueDate);\n        updateProject(index, newProject);\n    }\n\n    let deleteTodo = (index) => {\n        console.log(index);\n        todoList.splice(index, 1);\n    };\n\n    let getToDoList = () => {\n        return todoList;\n    }\n\n    return {\n        getToDoList,\n        createTodo,\n        updateTaskDetails,\n        deleteTodo,\n        findIndex,\n    }\n\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/todo-task.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domHandler\": () => (/* binding */ domHandler)\n/* harmony export */ });\n/* harmony import */ var _todo_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task */ \"./src/todo-task.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\n\n\nlet domHandler = (() => {\n\n    let exampleProject = document.querySelector('#example-project');\n    let activeProject;\n\n    let addProjectButton = document.querySelector('#add-project-button');\n    let addTaskButton = document.querySelector('#add-task-button');\n    let addProjectSubmitButton = document.querySelector('#add-project-submit-button');\n    let addTaskSubmitButton = document.querySelector('#add-task-submit-button');\n\n    exampleProject.addEventListener('click', (e) => {\n        activeProject.style.backgroundColor = '';\n        renderContent(e.currentTarget);\n    });\n\n    addProjectButton.addEventListener('click', () => _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.showAddProjectModal());\n    addProjectSubmitButton.addEventListener('click', () => submitNewProject());\n    addTaskSubmitButton.addEventListener('click', () => submitNewTask());\n\n    addTaskButton.addEventListener('click', () => {\n\n        let addProject = document.querySelector('#add-project');\n        addProject.value = activeProject.getElementsByTagName('span')[0].textContent;\n        _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.showAddTaskModal()\n    });\n\n\n    let deleteTask = (e) => {\n        let listContainer = document.querySelector('#list-container');\n        let task = e.target.parentElement.parentElement.parentElement;\n        let title = task.querySelector('.task').textContent;\n        listContainer.removeChild(task);\n        _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.deleteTodo(_todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.findIndex(title));\n    }\n\n    let addNewTask = (title, index) => {\n\n        let listContainer = document.querySelector('#list-container');\n\n        let taskContainer = document.createElement('div');\n        taskContainer.classList.add('task-container');\n\n        let checkBox = document.createElement('div');\n        checkBox.classList.add('checkbox');\n        checkBox.addEventListener('click', () => checkBox.classList.contains('checkbox-checked') ? checkBox.classList.remove('checkbox-checked') : checkBox.classList.add('checkbox-checked'));\n\n        let task = document.createElement('span');\n        task.textContent = title;\n        task.classList.add('task');\n        task.setAttribute('data-index', index);\n\n        let buttonsContainer = document.createElement('div');\n        buttonsContainer.classList.add('buttons-container');\n\n        let detailsButton = document.createElement('button');\n        detailsButton.textContent = 'Details';\n        detailsButton.id = 'details';\n        detailsButton.addEventListener('click', e => _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.showDetails(e));\n\n        let iconsContainer = document.createElement('div');\n        iconsContainer.classList.add('icons-container');\n\n        let editIcon = document.createElement('span');\n        editIcon.classList.add('material-icons', 'icon');\n        editIcon.textContent = 'edit_note';\n        editIcon.addEventListener('click', (e) => _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.editDetails(e));\n\n        let delIcon = document.createElement('span');\n        delIcon.classList.add('material-icons', 'icon');\n        delIcon.textContent = 'delete';\n        delIcon.addEventListener('click', e => deleteTask(e));\n\n        iconsContainer.append(editIcon, delIcon);\n        buttonsContainer.append(detailsButton, iconsContainer);\n        taskContainer.append(checkBox, task, buttonsContainer);\n        listContainer.append(taskContainer);\n    }\n\n    let submitNewProject = () => {\n        let projectName = document.querySelector('#add-project-name').value;\n        let projectsContainer = document.querySelector('#projects-container');\n\n        if (projectName !== '') {\n            let newProject = document.createElement('div');\n            let projectTitle = document.createElement('span');\n            let delIcon = document.createElement('span');\n\n            newProject.classList.add('project');\n            delIcon.classList.add('icon', 'material-icons');\n\n            delIcon.textContent = 'delete';\n            projectTitle.textContent = projectName;\n            newProject.append(projectTitle, delIcon);\n\n            newProject.addEventListener('click', (e) => {\n                activeProject.style.backgroundColor = '';\n                renderContent(e.currentTarget, projectName)\n            });\n\n            delIcon.addEventListener('click', (e) => deleteProject(e));\n\n            projectsContainer.append(newProject);\n            _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.clearAddProjectForm();\n        }\n\n        _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.hideAddProjectModal();\n    }\n\n    let submitNewTask = () => {\n        let addTitle = document.querySelector('#add-title').value;\n        let addDescription = document.querySelector('#add-description').value;\n        let addPriority = document.querySelector('#add-priority').value;\n        let addDueDate = document.querySelector('#add-due-date').value;\n        let addProject = document.querySelector('#add-project').value;\n\n        if (addTitle !== '' && addDescription !== '' &&\n            addPriority !== '' && addDueDate !== '' && addProject !== '') {\n\n            addNewTask(addTitle, _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList().length);\n            _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.createTodo(\n                addTitle, addDescription, addDueDate,\n                addPriority, addProject);\n        }\n        _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.hideAddTaskModal();\n        _modal__WEBPACK_IMPORTED_MODULE_1__.modalHandler.clearAddTaskForm();\n    }\n\n    let deleteProject = (e) => {\n        e.stopPropagation();\n        let projectsContainer = document.querySelector('#projects-container');\n        let projectToBeDeleted = e.currentTarget.parentElement;\n\n        let projectTitle = projectToBeDeleted.getElementsByTagName('span')[0].textContent;\n\n        _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList().forEach((element, index) => {\n            if (element.project === projectTitle) {\n                _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.deleteTodo(index);\n            }\n        });\n\n        projectsContainer.removeChild(projectToBeDeleted);\n        renderContent();\n    }\n\n    let renderContent = (target = exampleProject, projectTitle = 'Example Project') => {\n        target.style.backgroundColor = 'rgba(204, 177, 188, 0.8)';\n        activeProject = target;\n\n        let listContainer = document.querySelector('#list-container');\n        listContainer.innerHTML = '';\n\n        _todo_task__WEBPACK_IMPORTED_MODULE_0__.todoHandler.getToDoList().forEach((element, index) => {\n            if (element.project === projectTitle) {\n                addNewTask(element.title, index);\n            }\n        });\n    }\n\n    return {\n        renderContent\n    }\n\n})();\n\n//# sourceURL=webpack://todo-list/./src/ui.js?");

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