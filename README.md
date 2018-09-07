# JQuery Plugin: Yet Another TODO List 
[![Build Status](https://travis-ci.org/msalsas/yet-another-todo-list.svg?branch=master)](https://travis-ci.org/msalsas/yet-another-todo-list)
[![npm version](https://badge.fury.io/js/yet-another-todo-list.svg)](https://badge.fury.io/js/yet-another-todo-list)

## Install
 
`npm install yet-another-todo-list --save`
 
## Usage

With default options:

`$(yourContainer).yetAnotherTodoList();`

With options:

    $(yourContainer).yetAnotherTodoList({
        defaultList     : ["Foo", "Bar"],
        titleText       : 'TODO list title',
        buttonAddText   : '+ Add',
        buttonDeleteText: '- Delete',
        buttonUndoText  : 'Undo',
    });

 
## Demo

There is a demo at [https://github.com/msalsas/yet-another-todo-list/blob/master/dist/index.html](https://github.com/msalsas/yet-another-todo-list/blob/master/dist/index.html).

## Development

`npm run build` to deploy