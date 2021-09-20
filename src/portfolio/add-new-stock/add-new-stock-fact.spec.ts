describe('AddNewStockService', function () {
    var svc, $httpBackend;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (_AddNewStockService_, _$httpBackend_) {
        svc = _AddNewStockService_;
        $httpBackend = _$httpBackend_;
    }));

    describe('getStocks', function () {
        beforeEach(function () {
            $httpBackend
                .when('JSONP', '//d.yimg.com/aq/autoc?callback=JSON_CALLBACK&lang=en-US&query=F&region=US')
                .respond({
                    ResultSet: {
                        Result: [
                            {
                                ticker: 'GOOG',
                                exchDisp: 'RANDOM'
                            },
                            {
                                ticker: 'AAPL',
                                exchDisp: 'NASDAQ'
                            },
                            {
                                ticker: 'F',
                                exchDisp: 'NYSE'
                            },
                            {
                                ticker: 'YHOO',
                                exchDisp: 'AAA'
                            }
                        ]
                    }
                });
        });

        it('should have an getStocks function', function () {
            expect(_.isFunction(svc.getStocks)).toBeTruthy();
        });

        it('should call into yahoo images', function () {
            svc.getStocks('F');
            $httpBackend.flush();
            $httpBackend.expectJSONP('//d.yimg.com/aq/autoc?callback=JSON_CALLBACK&lang=en-US&query=F&region=US');
        });

        it('should filter out the results', function () {
            svc.getStocks('F').then(function (stocks) {
                expect(stocks).toEqual([
                    {
                        ticker: 'AAPL',
                        exchDisp: 'NASDAQ'
                    },
                    {
                        ticker: 'F',
                        exchDisp: 'NYSE'
                    }
                ]);
            });
            $httpBackend.flush();
        });
    });
});