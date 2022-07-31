describe('StockSliderCtrl', function () {
    var ctrl, createController;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope) {
        createController = function () {
            ctrl = $controller('StockSliderCtrl', { $scope: $rootScope.$new() });
        };
    }));

    describe('initialization', function () {
        it('has a getMax function', function () {
            createController();
            expect(_.isFunction(ctrl.getMax)).toBeTruthy();
        });
    