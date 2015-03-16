/**
 * Setup RequireJS configuration.
 */
require.config({
    paths: {
        underscore      : '../lib/underscore/underscore',
        backbone        : '../lib/backbone/backbone',
        marionette      : '../lib/backbone.marionette/lib/backbone.marionette',
        jquery          : '../lib/jquery/dist/jquery',
        localStorage    : '../lib/backbone.localStorage/backbone.localStorage',
        radio           : '../lib/backbone.radio/build/backbone.radio',
        bootstrap       : '../lib/bootstrap/dist/js/bootstrap.min',
        tpl             : '../lib/requirejs-tpl/tpl',

        utils           : 'utils'
    },

    shim: {
        utils: {
            exports: '_utils'
        },

        underscore: {
            exports: '_'
        },

        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },

        marionette: {
            exports: 'Marionette',
            deps: ['backbone', 'radio']
        },

        radio: {
            exports: 'Radio',
            deps: ['backbone']
        },

        bootstrap: {
            exports: '$',
            deps: ['jquery']
        }

    },
    waitSeconds: 60
});


/**
 * Application "main" function.
 */
require(
    ['utils', 'config', 'app', 'modules/skeleton'],
    function(_utils, _config, myApp, SkeletonModule) {

        'use strict';

        _utils.log("SETUP", "Application:Main => Still loading");

        myApp.addInitializer(function () {
            SkeletonModule.start();
        });

        myApp.start();

        _utils.log("SETUP", "Application:Main => Initialized");
    }
);