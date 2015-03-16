define(
    ['marionette', 'tpl!../../templates/skeleton/menu.tpl'],
    function (Marionette, TemplateMenu) {

        'use strict';

        var MenuView = Marionette.ItemView.extend({
            template: TemplateMenu
        });

        return MenuView;
    }
);
