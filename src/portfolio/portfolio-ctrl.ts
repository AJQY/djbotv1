/**
* @ngdoc controller
* @name RealTimeTrade.controller:PortfolioCtrl
*
* @description
*
* @requires AuthenticationService
* @requires PortfolioService
**/
angular.module('RealTimeTrade').controller('PortfolioCtrl', function (AuthenticationService, PortfolioService) {
    var ctrl = this;

    //Get portfolio
    var uid = AuthenticationService.getUserID();
    ctrl.portfolio = PortfolioService.get