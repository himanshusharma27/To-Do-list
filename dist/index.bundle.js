"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{
/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.hrefresh {\n  display: flex;\n  justify-content: space-between;\n}\n\n.input-button {\n  display: flex;\n  justify-content: space-between;\n}\n\n.checkbox-value-icon {\n  display: flex;\n  justify-content: space-between;\n}\n\n.checkbox-value {\n  display: flex;\n  justify-content: space-around;\n}\n\n.checkbox {\n  margin-right: 1rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

    
/***/ }),

@@ -109,13 +109,33 @@ eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElem

    /***/ }),
    
    /***/ "./src/eventHandlers.js":
    /*!******************************!*\
      !*** ./src/eventHandlers.js ***!
      \******************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAddButtonClick: () => (/* binding */ handleAddButtonClick),\n/* harmony export */   handleClearButtonClick: () => (/* binding */ handleClearButtonClick),\n/* harmony export */   handleKeyPress: () => (/* binding */ handleKeyPress)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\nconst handleAddButtonClick = () => {\n  const valueInput = document.querySelector('.value');\n  const description = valueInput.value.trim();\n  if (description !== '') {\n    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.addTask)(description);\n    valueInput.value = '';\n  }\n};\nconst handleKeyPress = (event) => {\n  if (event.key === 'Enter') {\n    handleAddButtonClick();\n  }\n};\nconst handleClearButtonClick = () => {\n  (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.clearCompletedTasks)();\n};\n\n//# sourceURL=webpack://to-do-list/./src/eventHandlers.js?");
    
    /***/ }),
    
    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _eventHandlers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventHandlers.js */ \"./src/eventHandlers.js\");\n\n\n\n\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.loadFromLocalStorage)();\n(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.renderToDoList)();\nconst addBtn = document.querySelector('.addBtn');\naddBtn.addEventListener('click', _eventHandlers_js__WEBPACK_IMPORTED_MODULE_2__.handleAddButtonClick);\nconst valueInput = document.querySelector('.value');\nvalueInput.addEventListener('keypress', _eventHandlers_js__WEBPACK_IMPORTED_MODULE_2__.handleKeyPress);\nconst clearBtn = document.querySelector('.clearBtn');\nclearBtn.addEventListener('click', _eventHandlers_js__WEBPACK_IMPORTED_MODULE_2__.handleClearButtonClick);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTaskDescription: () => (/* binding */ editTaskDescription),\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   renderToDoList: () => (/* binding */ renderToDoList),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\nconst listContainer = document.querySelector('.list-container');\nlet toDo = [];\n\nfunction loadFromLocalStorage() {\n  const storedList = localStorage.getItem('toDoList');\n  if (storedList) {\n    toDo = JSON.parse(storedList);\n  }\n}\n\nfunction renderToDoList() {\n  listContainer.innerHTML = '';\n  toDo.forEach((item) => {\n    const div1 = document.createElement('div');\n    div1.classList.add('list-wrapper');\n    const div2 = document.createElement('div');\n    div2.classList.add('checkbox-value-icon');\n    const div3 = document.createElement('div');\n    div3.classList.add('checkbox-value');\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.classList.add('checkbox');\n    checkbox.checked = item.completed;\n    checkbox.addEventListener('change', () => {\n      item.completed = checkbox.checked;\n      saveToLocalStorage();\n    });\n    const inputField = document.createElement('input');\n    inputField.type = 'text';\n    inputField.value = item.description;\n    const saveBtn = document.createElement('button');\n    saveBtn.textContent = 'Save';\n    saveBtn.addEventListener('click', () => {\n      editTaskDescription(item.index, inputField.value);\n      renderToDoList();\n    });\n    const deleteBtn = document.createElement('button');\n    deleteBtn.textContent = 'Delete';\n    deleteBtn.addEventListener('click', () => {\n      deleteTask(item.index);\n    });\n    div3.appendChild(checkbox);\n    div3.appendChild(inputField);\n    div3.appendChild(saveBtn);\n    div3.appendChild(deleteBtn);\n    const icon = document.createElement('span');\n    icon.classList.add('material-symbols-outlined');\n    icon.textContent = 'more_vert';\n    div2.appendChild(div3);\n    div2.appendChild(icon);\n    const hr = document.createElement('hr');\n    div1.appendChild(div2);\n    div1.appendChild(hr);\n    listContainer.appendChild(div1);\n  });\n}\n\nfunction updateIndexes() {\n  toDo.forEach((task, index) => {\n    task.index = index + 1;\n  });\n}\n\nfunction saveToLocalStorage() {\n  localStorage.setItem('toDoList', JSON.stringify(toDo));\n}\n\nfunction addTask(description) {\n  const task = {\n    description,\n    completed: false,\n    index: toDo.length + 1,\n  };\n  toDo.push(task);\n  saveToLocalStorage();\n  renderToDoList();\n}\n\nfunction deleteTask(index) {\n  toDo.splice(index - 1, 1);\n  updateIndexes();\n  saveToLocalStorage();\n  renderToDoList();\n}\n\nfunction editTaskDescription(index, newDescription) {\n  toDo[index - 1].description = newDescription;\n  saveToLocalStorage();\n}\n\nfunction clearCompletedTasks() {\n  toDo = toDo.filter((task) => !task.completed);\n  updateIndexes();\n  saveToLocalStorage();\n  renderToDoList();\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/todo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);