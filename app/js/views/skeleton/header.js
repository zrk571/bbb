define(
    ['marionette', 'tpl!../../templates/skeleton/header.tpl'],
    function (Marionette, TemplateHeader) {

        'use strict';

        var HeaderView = Marionette.ItemView.extend({
            template: TemplateHeader
        });

        return HeaderView;
    }
);
