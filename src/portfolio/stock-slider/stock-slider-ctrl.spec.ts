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

    describe('initialization',