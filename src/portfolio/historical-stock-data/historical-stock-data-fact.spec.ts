describe('HistoricalStockDataService', function () {
    var svc, $q, $rootScope, $httpBackend;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (HistoricalS