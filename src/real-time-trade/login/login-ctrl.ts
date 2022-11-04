
/**
* @ngdoc controller
* @name RealTimeTrade.controller:LoginCtrl
*
* @description
*
* @requires $scope
* @requires $mdDialog
**/
angular.module('RealTimeTrade').controller('LoginCtrl', function ($scope, $mdDialog) {
    var ctrl = this;

    ctrl.dialog = $mdDialog.show({
        controller: function (AuthenticationService) {
            var ctrl = this;
            ctrl.logIn = AuthenticationService.logIn;
            ctrl.signUp = AuthenticationService.signUp;
        },
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'real-time-trade/login/login.html',
        escapeToClose: false
    });
    
    $scope.$on('$destroy', function () {
			$mdDialog.hide();
		});
});