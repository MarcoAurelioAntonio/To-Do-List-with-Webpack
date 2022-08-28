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

/***/ "./src/components/addData.js":
/*!***********************************!*\
  !*** ./src/components/addData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addText\": () => (/* binding */ addText),\n/* harmony export */   \"loadData\": () => (/* binding */ loadData)\n/* harmony export */ });\n// Constants:\nconst addText = document.getElementById('add');\nconst list = document.getElementById('list');\n\nfunction loadData() {\n  list.innerHTML = '';\n  const listArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];\n  for (let i = 0; i < listArray.length; i += 1) {\n    // task div\n    const div = document.createElement('div');\n    div.classList.add('divTask');\n    // check\n    const check = document.createElement('input');\n    check.setAttribute('type', 'checkbox');\n    check.id = i + 1;\n    check.classList.add('check');\n    if (listArray[i].completed) {\n      check.checked = true;\n    }\n    // descrption\n    const descript = document.createElement('input');\n    descript.value = `${listArray[i].description}`;\n    descript.setAttribute('type', 'text');\n    if (listArray[i].completed) {\n      descript.style.textDecorationLine = 'line-through';\n    }\n    // read only field, for change when edit.\n    descript.setAttribute('readOnly', 'readOnly');\n    descript.classList.add('descrption');\n    // edit button\n    const tooltipDiv = document.createElement('button');\n    tooltipDiv.id = i + 1;\n    tooltipDiv.textContent = '⁝';\n    tooltipDiv.classList.add('tooltip');\n\n    // div container\n    const divCont = document.createElement('div');\n    divCont.id = i + 1;\n    divCont.classList.add('divCont');\n    // appending p, check and tricolon\n    divCont.appendChild(check);\n    divCont.appendChild(descript);\n    divCont.appendChild(tooltipDiv);\n    list.appendChild(divCont);\n\n    addText.value = '';\n\n    // Checking completed task.\n    check.addEventListener('input', (event) => {\n      if (check.checked) {\n        const idChecked = event.target.id;\n        const data = JSON.parse(localStorage.getItem('data'));\n        data[idChecked - 1].completed = true;\n        descript.style.textDecorationLine = 'line-through';\n        localStorage.setItem('data', JSON.stringify(data));\n      } else if (!check.checked) {\n        const idNoChecked = event.target.id;\n        const data = JSON.parse(localStorage.getItem('data'));\n        data[idNoChecked - 1].completed = false;\n        descript.style.textDecorationLine = 'none';\n        localStorage.setItem('data', JSON.stringify(data));\n      }\n      window.location.reload();\n    });\n\n    // Edit button\n    tooltipDiv.addEventListener('click', (event) => {\n      /* event.preventDefault(); */\n      /* console.log('ok'); */\n      if (tooltipDiv.textContent === '⁝') {\n        descript.removeAttribute('readonly');\n        descript.focus();\n        tooltipDiv.innerHTML = 'Save';\n        tooltipDiv.style.color = 'grey';\n      } else {\n        const edited = descript.value;\n        const idNumber = event.target.id;\n        descript.setAttribute('readonly', 'readonly');\n        tooltipDiv.innerHTML = '⁝';\n        tooltipDiv.style.color = 'black';\n\n        const data = JSON.parse(localStorage.getItem('data'));\n        data[idNumber - 1].description = `${edited}`;\n        for (let i = 0; i < data.length; i += 1) {\n          data[i].index = i + 1;\n        }\n        localStorage.setItem('data', JSON.stringify(data));\n        window.location.reload();\n      }\n    });\n  }\n}\n\n// Refreshing or loading page\nwindow.addEventListener('load', () => {\n  loadData();\n});\n\n\n\n\n//# sourceURL=webpack://webpack/./src/components/addData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_addData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/addData.js */ \"./src/components/addData.js\");\n\n\nconst addBtn = document.getElementById('addBtn');\nconst clearAll = document.getElementById('clearBtn');\nconst listArray = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];\n\nlet id = 1;\naddBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (_components_addData_js__WEBPACK_IMPORTED_MODULE_0__.addText.value !== '') {\n    const task = {\n      description: `${_components_addData_js__WEBPACK_IMPORTED_MODULE_0__.addText.value}`,\n      completed: false,\n      index: id,\n    };\n    listArray.push(task);\n    /* loadData(); */ // call to create the task element.\n\n    // Load from local sttorage\n    const tasks = localStorage.getItem('data')\n      ? JSON.parse(localStorage.getItem('data'))\n      : [];\n    tasks.push(task);\n    for (let i = 0; i < tasks.length; i += 1) {\n      tasks[i].index = i + 1;\n    }\n    localStorage.setItem('data', JSON.stringify(tasks));\n  }\n  id += 1;\n  (0,_components_addData_js__WEBPACK_IMPORTED_MODULE_0__.loadData)();\n});\n\nclearAll.addEventListener('click', (e) => {\n  e.preventDefault();\n  const notDeleted = listArray.filter((x) => x.completed === false);\n  /* console.log(notDeleted); */\n  for (let i = 0; i < notDeleted.length; i += 1) {\n    notDeleted[i].index = i + 1;\n  }\n  localStorage.setItem('data', JSON.stringify(notDeleted));\n  (0,_components_addData_js__WEBPACK_IMPORTED_MODULE_0__.loadData)();\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

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