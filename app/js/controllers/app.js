define(
    ['utils', 'app', 'marionette', 'radio'],
    function(_utils, myApp, Marionette, Radio) {

        'use strict';

        Radio.DEBUG = true;
        Radio.tuneIn('layout');
        Radio.log('layout', 'access:layout');

        var AppController = Marionette.Controller.extend({
            displayIndex: function () {
                console.log("I'll display index page");
            },

            displayOnConsole: function() {
                _utils.log("ACTION", "I display this message on console");

                var urlFm = Radio.channel('layout');
                urlFm.trigger('access:layout', null);
            },

            displayMessageOnConsole: function(message) {
                _utils.log("ACTION", "I display this message on console: " + message);

                var urlFm = Radio.channel('layout');
                urlFm.trigger('access:layout', message);
            }
        });

        return new AppController();
    }
);
