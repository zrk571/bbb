define(function() {
    'use strict';

    /*
     * Utils object declaration.
     */
    var Utils = function() {
        // Nothing.
    };

    /*
     * Prototype declaration.
     */

    /**
     * Function which logs message on STDOUT like " [type] message "
     * @param type prefix type
     * @param message data to log
     */
    Utils.prototype.log = function(type,message) {
        console.log("["+ type + "] " + message);
    };

    return new Utils();
});

