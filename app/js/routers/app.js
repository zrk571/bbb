define(
    ['utils', 'marionette', '../controllers/app'],
    function(_utils, Marionette, SkeletonController) {

    'use strict';

    var SkeletonRouter = Marionette.AppRouter.extend({
        controller: SkeletonController,
        appRoutes: {
            '': 'displayOnConsole',
            'link1': 'displayOnConsole',
            'link2/:message': 'displayMessageOnConsole'
        }
    });

    return SkeletonRouter;
});
