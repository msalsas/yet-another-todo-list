/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./yet-another-todo-list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./yet-another-todo-list.js":
/*!**********************************!*\
  !*** ./yet-another-todo-list.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\n * This file is part of the Yet Another TODO List package.\n *\n * (c) Manolo Salsas\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n */\n\n\n\n__webpack_require__(/*! ./yet-another-todo-list.scss */ \"./yet-another-todo-list.scss\");\n\n(function ($) {\n\n    $.fn.yetAnotherTodoList = function (options) {\n\n        // Set default options\n        options = $.extend({\n            defaultList: [],\n            titleText: 'TODO list',\n            buttonAddText: '+ Add',\n            buttonDeleteText: '- Delete',\n            buttonUndoText: 'Undo'\n        }, options);\n\n        this.each(function () {\n            var todoList = $(this);\n            var previousItems = null;\n\n            var createElements = function createElements(titleText) {\n\n                var prompt = document.createElement(\"div\"),\n                    promptInput = document.createElement(\"input\"),\n                    promptButton = document.createElement(\"button\"),\n                    title = document.createElement(\"h2\"),\n                    list = document.createElement(\"ul\"),\n                    addButton = document.createElement(\"button\"),\n                    deleteButton = document.createElement(\"button\"),\n                    undoButton = document.createElement(\"button\");\n\n                promptInput.type = \"text\";\n\n                $(promptButton).text(\"+\");\n\n                $(prompt).addClass(\"yet-another-todo-list-prompt\");\n                $(prompt).hide();\n                prompt.appendChild(promptInput);\n                prompt.appendChild(promptButton);\n\n                $(title).text(titleText);\n\n                $(addButton).text(options.buttonAddText);\n                $(addButton).addClass(\"yet-another-todo-list-add-button\");\n\n                $(deleteButton).text(options.buttonDeleteText);\n                $(deleteButton).addClass(\"yet-another-todo-list-delete-button\");\n\n                $(undoButton).text(options.buttonUndoText);\n                $(undoButton).addClass(\"yet-another-todo-list-undo-button\");\n\n                $(list).addClass(\"yet-another-todo-list-ul\");\n\n                if (options.defaultList) {\n                    options.defaultList.forEach(function (itemText) {\n                        var item = document.createElement(\"li\");\n\n                        $(item).addClass(\"yet-another-todo-list-item\");\n                        $(item).text(itemText);\n                        list.append(item);\n                    });\n                }\n\n                todoList.append(prompt);\n                todoList.append(title);\n                todoList.append(addButton);\n                todoList.append(deleteButton);\n                todoList.append(undoButton);\n                todoList.append(list);\n\n                return todoList;\n            };\n\n            var addItem = function addItem(text) {\n                if (text) {\n                    var item = document.createElement(\"li\");\n\n                    item.className = \"yet-another-todo-list-item\";\n                    $(item).text(text);\n                    todoList.find(\".yet-another-todo-list-ul\").prepend(item);\n                }\n            };\n\n            var removeItems = function removeItems() {\n                var items = todoList.find(\"li.selected\");\n\n                $(items).remove();\n            };\n\n            var isPromptVisible = function isPromptVisible() {\n                var prompt = todoList.find(\".yet-another-todo-list-prompt\");\n\n                return $(prompt).is(\":visible\");\n            };\n\n            var addItemAndHidePrompt = function addItemAndHidePrompt(text, prompt, input) {\n                addItem(text);\n                prompt.hide();\n                input.val(\"\");\n            };\n\n            var saveItems = function saveItems() {\n                previousItems = getItems();\n            };\n\n            var getItems = function getItems() {\n                return todoList.find(\".yet-another-todo-list-item\").clone();\n            };\n\n            createElements(options.titleText);\n            saveItems();\n\n            // Add button handler\n            todoList.on(\"click\", \".yet-another-todo-list-add-button\", function () {\n                var prompt = $(this).parent().find(\".yet-another-todo-list-prompt\");\n\n                prompt.show();\n                prompt.find(\"input\").focus();\n            });\n\n            // Delete button handler\n            todoList.on(\"click\", \".yet-another-todo-list-delete-button\", function () {\n                saveItems();\n                removeItems();\n            });\n\n            // Add item handler\n            todoList.on(\"click\", \".yet-another-todo-list-prompt button\", function () {\n                saveItems();\n                var prompt = $(this).parent();\n                var input = prompt.find(\"input\").eq(0);\n                var text = input.val();\n\n                if (text) {\n                    addItemAndHidePrompt(text, prompt, input);\n                }\n            });\n\n            // Toggle item selection\n            todoList.on(\"click\", \".yet-another-todo-list-item\", function () {\n                saveItems();\n                var item = $(this),\n                    selectedClass = \"selected\";\n\n                if (item.hasClass(selectedClass)) {\n                    item.removeClass(selectedClass);\n                } else {\n                    item.addClass(selectedClass);\n                }\n            });\n\n            // Delete item on double click\n            todoList.on(\"dblclick\", \".yet-another-todo-list-item\", function () {\n                saveItems();\n                $(this).remove();\n            });\n\n            // Undo last action\n            todoList.on(\"click\", \".yet-another-todo-list-undo-button\", function () {\n                todoList.find(\".yet-another-todo-list-item\").remove();\n                todoList.find(\".yet-another-todo-list-ul\").append(previousItems);\n            });\n\n            // On Enter key press\n            $(document).keypress(function (e) {\n                if (e.which == 13 && isPromptVisible()) {\n                    var prompt = todoList.find(\".yet-another-todo-list-prompt\").eq(0);\n                    var input = prompt.find(\"input\").eq(0);\n                    var text = input.val();\n\n                    if (text) {\n                        saveItems();\n                        addItemAndHidePrompt(text, prompt, input);\n                    }\n                }\n            });\n\n            return this;\n            ////////////////////////////////////////////////////////////////\n        }); /// End return this.each(function () {})\n    };\n})(jQuery);\n\n//# sourceURL=webpack:///./yet-another-todo-list.js?");

/***/ }),

/***/ "./yet-another-todo-list.scss":
/*!************************************!*\
  !*** ./yet-another-todo-list.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./yet-another-todo-list.scss?");

/***/ })

/******/ });