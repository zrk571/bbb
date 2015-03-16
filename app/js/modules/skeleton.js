define(
    ['utils', 'marionette', '../app', 'routers/app', '../views/layout'],
    function(_utils, Marionette, myApp, SkeletonRouter, SkeletonLayout) {

        'use strict';

        var SkeletonModule = myApp.module("Skeleton", function(Skeleton) {
            this.startWithParent = false;

            this.addInitializer(function() {
                this.router = new SkeletonRouter();
                myApp.getRegion('viewport').show(new SkeletonLayout());
            });

        });

        return SkeletonModule;
    }
);