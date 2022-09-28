/**
* @ngdoc controller
* @name RealTimeTrade.controller:AboutDialogCtrl
*
* @description
* Controller for the About dialog, internally.
*
* @requires $mdDialog
**/
angular.module('RealTimeTrade').controller('AboutDialogCtrl', function ($mdDialog) {
    var ctrl = this;

    ctrl.closeDialog = function () {
        $mdDialog.hide();
    };

    ctrl.developers = [
        {
            name: 'Aaron Buxbaum',
            title: 'Lead Software Engineer