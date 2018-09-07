/*
 * This file is part of the Yet Another TODO List package.
 *
 * (c) Manolo Salsas
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';
import './yet-another-todo-list.scss';

(function($) {

    $.fn.yetAnotherTodoList = function(options) {

        // Set default options
        options = $.extend({
            defaultList                : [],
            titleText                  : 'TODO list',
            buttonAddText              : '+ Add',
            buttonDeleteText           : '- Delete',
            buttonUndoText             : 'Undo',
        }, options);

        this.each(function() {
            let todoList = $(this);
            let previousItems = null;

            const createElements = function(titleText) {

                let prompt = document.createElement("div"),
                    promptInput = document.createElement("input"),
                    promptButton = document.createElement("button"),
                    title = document.createElement("h2"),
                    list = document.createElement("ul"),
                    addButton = document.createElement("button"),
                    deleteButton = document.createElement("button"),
                    undoButton = document.createElement("button");

                promptInput.type = "text";

                $(promptButton).text("+");

                $(prompt).addClass("yet-another-todo-list-prompt");
                $(prompt).hide();
                prompt.appendChild(promptInput);
                prompt.appendChild(promptButton);

                $(title).text(titleText);

                $(addButton).text(options.buttonAddText);
                $(addButton).addClass("yet-another-todo-list-add-button");

                $(deleteButton).text(options.buttonDeleteText);
                $(deleteButton).addClass("yet-another-todo-list-delete-button");

                $(undoButton).text(options.buttonUndoText);
                $(undoButton).addClass("yet-another-todo-list-undo-button");

                $(list).addClass("yet-another-todo-list-ul");

                if (options.defaultList) {
                    options.defaultList.forEach((itemText) => {
                        let item = document.createElement("li");

                        $(item).addClass("yet-another-todo-list-item");
                        $(item).text(itemText);
                        list.append(item);
                    });
                }

                todoList.append(prompt);
                todoList.append(title);
                todoList.append(addButton);
                todoList.append(deleteButton);
                todoList.append(undoButton);
                todoList.append(list);

                return todoList;
            };

            const addItem = function(text) {
                if (text) {
                    let item = document.createElement("li");

                    item.className = "yet-another-todo-list-item";
                    $(item).text(text);
                    todoList.find(".yet-another-todo-list-ul").prepend(item);
                }
            };

            const removeItems = function() {
                const items = todoList.find("li.selected");

                $(items).remove();
            };

            const isPromptVisible = function() {
                const prompt = todoList.find(".yet-another-todo-list-prompt");

                return $(prompt).is(":visible");
            };

            const addItemAndHidePrompt = function(text, prompt, input) {
                addItem(text);
                prompt.hide();
                input.val("");
            };

            const saveItems = function() {
                previousItems = getItems();
            };

            const getItems = function() {
                return todoList.find(".yet-another-todo-list-item").clone();
            };

            createElements(options.titleText);
            saveItems();

            // Add button handler
            todoList.on("click", ".yet-another-todo-list-add-button", function() {
                const prompt = $(this).parent().find(".yet-another-todo-list-prompt");

                prompt.show();
                prompt.find("input").focus();
            });

            // Delete button handler
            todoList.on("click", ".yet-another-todo-list-delete-button", function() {
                saveItems();
                removeItems();
            });

            // Add item handler
            todoList.on("click", ".yet-another-todo-list-prompt button", function() {
                saveItems();
                const prompt = $(this).parent();
                const input = prompt.find("input").eq(0);
                const text = input.val();

                if (text) {
                    addItemAndHidePrompt(text, prompt, input);
                }
            });

            // Toggle item selection
            todoList.on("click", ".yet-another-todo-list-item", function() {
                saveItems();
                let item = $(this),
                    selectedClass = "selected";

                if (item.hasClass(selectedClass)) {
                    item.removeClass(selectedClass);
                } else {
                    item.addClass(selectedClass)
                }
            });

            // Delete item on double click
            todoList.on("dblclick", ".yet-another-todo-list-item", function() {
                saveItems();
                $(this).remove();
            });

            // Undo last action
            todoList.on("click", ".yet-another-todo-list-undo-button", function() {
                todoList.find(".yet-another-todo-list-item").remove();
                todoList.find(".yet-another-todo-list-ul").append(previousItems);
            });

            // On Enter key press
            $(document).keypress(function(e) {
                if(e.which == 13 && isPromptVisible()) {
                    const prompt = todoList.find(".yet-another-todo-list-prompt").eq(0);
                    const input = prompt.find("input").eq(0);
                    const text = input.val();

                    if (text) {
                        saveItems();
                        addItemAndHidePrompt(text, prompt, input);
                    }
                }
            });

            return this;
            ////////////////////////////////////////////////////////////////
        }); /// End return this.each(function () {})

    };
})(jQuery);