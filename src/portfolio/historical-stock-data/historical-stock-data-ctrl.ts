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
            style: {
                fontFamily: [
                    'Roboto',
                    'Helvetica Neue',
                    'sans-serif'
                ]
            }
        },
        credits: {
            enabled: false
        },
        navigator: false,
        rangeSelector: false,
        series: [],
        scrollbar : {
            enabled : false
        },
        tooltip: {
            valueDecimals: 2,
   