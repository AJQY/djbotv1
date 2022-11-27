/**
* @ngdoc controller
* @name RealTimeTrade.controller:LogoutCtrl
*
* @description
*
* @requires AuthenticationService
**/
angular.module('RealTimeTrade').controller('LogoutCtrl', function (AuthenticationService) {
    var ctrl = this;
    
    ctrl.logOut = AuthenticationService.logOut;
});