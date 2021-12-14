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
                        ["2016-01-05", 102.89],
                        ["2016-01-04", 101.95],
                        ["2015-12-31", 106]
                    ]
                }
            });
    }));
    
    describe('getHistoricalStockValues', function () {
        it('has a getHistoricalStockValues function', function () {
            expect(_.isFunction(svc.getHistoricalStockValues)).toBeTruthy();
        });
        
        it('returns for b