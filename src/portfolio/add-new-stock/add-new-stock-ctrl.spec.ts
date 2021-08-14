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

        it('calls the portfolio function and the close function', function () {
            spyOn(PortfolioService, 'addStock');
            spyOn(ctrl, 'close');
            ctrl.addStock();
            expect(PortfolioService.addStock).toHaveBeenCalled();
            expect(ctrl.close).toHaveBeenCalled();
        });
    });

    describe('close', function () {
        it('has an close function', function () {
            expect(_.isFunction(ctrl.close)).toBeTruthy();
        });

        it('nullifies the stock value and closes the dropdown', function () {
            ctrl.isOpen = true;
            ctrl.newStock = 'AAA';
            ctrl.close();
            expect(ctrl.isOpen).toBeFalsy();
            expect(ctrl.newStock).toBeNull();
        });
    });
});