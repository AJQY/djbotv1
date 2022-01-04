
angular.module('RealTimeTrade').factory('HistoricalStockDataService', function ($http) {
    var svc = this;

    //Get historical stock values
    svc.getHistoricalStockValues = function (symbol: string) {
        if (!_.isString(symbol)) { return; }

        return $http({
            method: 'GET',
            url: '//www.quandl.com/api/v3/datasets/WIKI/' + symbol + '.json',
            cache: true,
            params: {
                limit: 50,
                column_index: 1,
                auth_token: '_LR44m9zxP7wE6D4vkMD'
            }
        }).then(function (response) {
            return _(response.data.dataset.data)
                .reverse()
                .map(function(item) {
                    item[0] = new Date(item[0]).getTime();
                    return item;
                })
                .value();
        });
    };

    return svc;
});