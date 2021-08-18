describe('AddNewStockService', function () {
    var svc, $httpBackend;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (_AddNewStockService_, _$httpBackend_) {
        svc = _AddNewSt