describe('AddNewStockCtrl', function () {
    var ctrl, PortfolioService;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, _PortfolioService_) {
        ctrl = $controller('AddNewStockCtrl', {});
        PortfolioService = _PortfolioService_;
    }));

    describe('addStock', function () {
        it('has an addStock function', function () {
            expect(_.isFunction(ctrl.addStock)).toBeTruthy();
        });

