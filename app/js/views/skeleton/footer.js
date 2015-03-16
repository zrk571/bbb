define(
    ['utils', 'marionette', 'radio', 'tpl!../../templates/skeleton/footer.tpl', '../../models/FooterModel'],
    function (_utils, Marionette, Radio, TemplateFooter, FooterModel) {

        'use strict';

        var data = new FooterModel();

        var FooterView = Marionette.ItemView.extend({
            template: TemplateFooter,
            model : data,

            ui : {
                "footerText" : ".name"
            },

            initialize: function() {
                var fm = Radio.channel('layout');
                fm.on('access:layout', this.updateFooter, this);
            },

            updateFooter: function(arg1) {
                if(arg1 === null){
                    //console.log(this.model.default);
                    this.model.clear().set(this.model.defaults);
                }
                else{
                    this.model.set("name", encodeURI(arg1));
                }

                this.render();
            },

            onBeforeRender: function() {
                this.template = TemplateFooter;
            }
        });

        return FooterView;
    }
);
