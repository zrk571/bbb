define(
    ['utils','marionette',
     'tpl!../templates/layout.tpl',
        './skeleton/header',
        './skeleton/footer',
        './skeleton/content',
        './skeleton/menu',
        './skeleton/navbar'],
    function(_utils, Marionette, TemplateLayout, HeaderView, FooterView, ContentView, MenuView, NavbarView) {

        'use strict';

        var MenuView = Marionette.LayoutView.extend({
            template: TemplateLayout,

            regions: {
                header  : "#RegionHeader" ,
                content : "#RegionContent",
                footer  : "#RegionFooter" ,
                menu    : "#RegionMenu"   ,
                navbar  : "#RegionNavbar"
            },

            onBeforeShow: function() {
                this.setupView();
            },

            setupView : function() {
                this.showChildView("header",  new HeaderView());
                this.showChildView("footer",  new FooterView());
                this.showChildView("content", new ContentView());
                this.showChildView("navbar",  new NavbarView());
            }
        });

        return MenuView;

});
