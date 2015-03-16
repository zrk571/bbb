define(
    ['utils', 'marionette', 'radio', 'tpl!../../templates/skeleton/content.tpl'],
    function (_utils, Marionette, Radio, TemplateContent) {

        'use strict';

        var ContentView = Marionette.ItemView.extend({
            template: TemplateContent,

            clicks: 0,

            ui : {
                ascii : "pre#ascii"
            },

            events : {
                "click @ui.ascii": "updateContent"
            },

            initialize: function()  {
                var urlFm = Radio.channel('layout');
                urlFm.on('access:layout', this.updateContent, this);
            },

            updateContent: function(arg1) {
                if(arg1 == null){
                    this.template = TemplateContent;
                    this.render();
                }
                else{
                    this.ui.ascii.html("New content clicks=" + this.clicks++);
                }
            }
        });

        return ContentView;
    }
);

