/*
 * This file is part of the Yet Another TODO List package.
 *
 * (c) Manolo Salsas
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

(function($) {
    let mockjax = require('jquery-mockjax')($, window);

    mockjax({
        url: "/items",
        responseText: {
            status: "success",
            items: [
                "Lorem ipsum",
                "Sed ut perspiciatis",
                "Ut enim ad minim veniam",
                "Duis aute irure dolor in reprehenderit in voluptate"
            ]
        }
    });

    $.getJSON("/items", (response) => {
        // Default options
        $('#container-1').yetAnotherTodoList();

        // Custom options
        $('#container-2').yetAnotherTodoList({
            defaultList: response.items,
            titleText: 'Custom TODO List',
            buttonAddText: 'Add item',
            buttonDeleteText: 'Delete selected',

        });
    });

})(jQuery);