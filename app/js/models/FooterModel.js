define(
    ['backbone'],
    function (Backbone) {

        'use strict';

        var data = Backbone.Model.extend({
            defaults: {
                name : 'link1',
                url  : 'https://github.com/zrk571/bbb'
            },

            initialize: function() {
                // nothing
            }
        });

        return data;
    }
);

