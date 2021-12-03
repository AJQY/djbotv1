describe('HistoricalStockDataService', function () {
    var svc, $q, $rootScope, $httpBackend;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (HistoricalStockDataService, _$q_, _$rootScope_, _$httpBackend_) {
        svc = HistoricalSto