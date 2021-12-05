describe('HistoricalStockDataService', function () {
    var svc, $q, $rootScope, $httpBackend;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (HistoricalStockDataService, _$q_, _$rootScope_, _$httpBackend_) {
        svc = HistoricalStockDataService;
        $q = _$q_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        
        $httpBackend
            .when('GET')
            .respond({
                dataset: {
                    data: [
               