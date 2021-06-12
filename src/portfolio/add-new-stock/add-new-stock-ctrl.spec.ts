describe('AddNewStockCtrl', function () {
    var ctrl, PortfolioService;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, _PortfolioService_) {
 