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
            valuePrefix: '$'
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        }
    };

    if (_.isString(ctrl.symbol) && ctrl.symbol.length && ctrl.symbol.length < 6) {
        HistoricalStockDataService.getHistoricalStockValues(ctrl.symbol)
            .then(function (chartData) {
                ctrl.chart.addSeries({
                    name: ctrl.symbol,
                    data: chartData
                });
            })
            .finally(function() {
                ctrl.chart.hideLoading(); 
                ctrl.chart.reflow();
            });
    }
});