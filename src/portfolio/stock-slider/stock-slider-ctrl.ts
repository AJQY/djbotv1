/**
* @ngdoc controller
* @name RealTimeTrade.controller:StockSliderCtrl
*
* @description
*
* @requires PortfolioService
**/
angular.module('RealTimeTrade').controller('StockSliderCtrl', function (PortfolioService) {
    var ctrl = this;
    
    ctrl.getMax = PortfolioService.getUnusedPercentage;
    ctrl.updateStock = PortfolioService.saveStock;
});