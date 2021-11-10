/**
* @ngdoc controller
* @name RealTimeTrade.controller:HistoricalStockDataCtrl
*
* @description
*
* @requires HistoricalStockDataService
**/
angular.module('RealTimeTrade').controller('HistoricalStockDataCtrl', function (HistoricalStockDataService) {
    var ctrl = this;
    
    ctrl.chartOptions = {
        chart: {
            height: 50,
            styl