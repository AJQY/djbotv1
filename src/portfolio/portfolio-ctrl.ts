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
    ctrl.portfolio = PortfolioService.getPortfolio(uid);
    ctrl.deleteStock = PortfolioService.deleteStock;
    ctrl.getMax = PortfolioService.getUnusedPercentage;
        
    //Stop loading when the portfolio finishes
    ctrl.portfolio.$loaded(function () {
        ctrl.isLoaded = true;
    });
});