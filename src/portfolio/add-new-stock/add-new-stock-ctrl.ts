/**
* @ngdoc controller
* @name RealTimeTrade.controller:AddNewStockCtrl
*
* @description
*
* @requires PortfolioService
* @requires AddNewStockService
**/
angular.module('RealTimeTrade').controller('AddNewStockCtrl', function (PortfolioService, AddNewStockService) {
    var ctrl = this;

    ctrl.getStocks =