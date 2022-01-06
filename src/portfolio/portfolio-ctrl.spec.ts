describe('PortfolioCtrl', function () {
    var ctrl, createController, getPortfolioSpy;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope, PortfolioService, Authenticatio