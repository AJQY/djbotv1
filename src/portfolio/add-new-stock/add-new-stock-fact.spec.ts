describe('AddNewStockService', function () {
    var svc, $httpBackend;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (_AddNewStockService_, _$httpBackend_) {
        svc = _AddNewStockService_;
        $httpBackend = _$httpBackend_;
    }));

    describe('getStocks', functi