define(
    ['marionette', 'tpl!../../templates/skeleton/navbar.tpl'],
    function (Marionette, TemplateNavbar) {

        'use strict';

        var NavbarView = Marionette.ItemView.extend({
            template: TemplateNavbar
        });

        return NavbarView;
    }
);
