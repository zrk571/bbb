define(
    ['backbone', 'marionette'],
    function(Backbone, Marionette) {

        'use strict';

        /**
         * Setup application.
         */
        var myApp = new Marionette.Application();


        /**
         * Setup app main region "viewport".
         */
        myApp.addRegions({
            viewport: '#Viewport'
         });


        /**
         * History initialization.
         */
        myApp.on('start', function() {
            if(Backbone.history){
                Backbone.history.start();
            }
        });


        return myApp;
});

