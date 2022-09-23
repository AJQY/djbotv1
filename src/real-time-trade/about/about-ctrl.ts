
/**
* @ngdoc controller
* @name RealTimeTrade.controller:AboutCtrl
*
* @description
* Controller for the About dialog.
*
* @requires $mdDialog
**/
angular.module('RealTimeTrade').controller('AboutCtrl', function ($mdDialog) {
    var ctrl = this;

    /**
    * @ngdoc method
    * @name AboutCtrl#openAbout
    * @methodOf About.controller:AboutCtrl
    *
    * @description
    * A function that opens a dialog with developer information.
    *
    * @param {Object=} $event an Angular click event
    **/
    ctrl.openAbout = function ($event) {
        $mdDialog.show({
            title: 'About',
            templateUrl: 'real-time-trade/about/about-dialog.html',
            ok: 'Close',
            targetEvent: $event,
            clickOutsideToClose: true,
            controller: 'AboutDialogCtrl',
            controllerAs: 'ctrl',
            bindToController: true
        });
    };
});