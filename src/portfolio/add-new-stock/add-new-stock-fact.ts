angular.module('RealTimeTrade').factory('AddNewStockService', function ($http, $q) {
  var svc = this;

  svc.getStocks = function (query) {
    return $http({
      method: 'JSONP',
      url: '//d.yimg.com/aq/autoc',
      params: {
        query: query,
    