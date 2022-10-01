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
            title: 'Lead Software Engineer',
            picture: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/005/01c/0ac/0ece994.jpg',
            linkedIn: 'https://www.linkedin.com/in/aaronbuxbaum',
            text: 'I\'m a software engineer working in AngularJS architecture at Raymond James Financial. ' +
            'I hold a Bachelors of Science in Computer Science and a Minor in Mathematics from the University of Massachusetts-Amherst, ' +
            'and currently am pursuing my Masters of Science in Computer Science from Georgia Institute of Technology.'
        }
    ];
});