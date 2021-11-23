/**
* @ngdoc directive
* @name RealTimeTrade.directive:historicalStockData
* @restrict E
* @element historical-stock-data
* @scope
*
* @description
**/
angular.module('RealTimeTrade').directive('historicalStockData', function () {
  return {
    restrict: 'E',
    controller: 'HistoricalStockDataC