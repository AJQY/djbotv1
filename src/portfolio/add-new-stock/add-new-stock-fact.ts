angular.module('RealTimeTrade').factory('AddNewStockService', function ($http, $q) {
  var svc = this;

  svc.getStocks = function (query) {
    return $http({
      method: 'JSONP',
      url: '//d.yimg.com/aq/autoc',
      params: {
        query: query,
        region: 'US',
        lang: 'en-US',
        callback: 'JSON_CALLBACK'
      },
      cache: true
    }).then(function (response) {
      return _.filter(response.data.ResultSet.Result, function(item) {
          return item.exchDisp === 'NASDAQ' || item.exchDisp === 'NYSE'
      });
    });
  };

  return svc;
});