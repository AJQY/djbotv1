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
        
        it('returns for bad input', function () {
            expect(svc.getHistoricalStockValues()).toBeUndefined();
            expect(svc.getHistoricalStockValues(2)).toBeUndefined();
            expect(svc.getHistoricalStockValues({symbol: 'AAPL'})).toBeUndefined();
            expect(svc.getHistoricalStockValues(['AAPL'])).toBeUndefined();
        });
        
        it('calls into the http service', function () {                
            svc.getHistoricalStockValues('AAPL');
            $httpBackend.flush();
            $httpBackend.expectGET();
        });
        
        it('maps the response from the http service', function () {
            svc.getHistoricalStockValues('AAPL')
                .then(function(response) {
                    expect(response).toEqual([[1451520000000, 106], [1451865600000, 101.95], [1451952000000, 102.89]]);
                });
            $httpBackend.flush();
        });
    });
});