describe('PortfolioCtrl', function () {
    var ctrl, createController, getPortfolioSpy;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope, PortfolioService, AuthenticationService) {
        spyOn(AuthenticationService, 'getUserID').and.returnValue(0);
        getPortfolioSpy = spyOn(PortfolioService, 'getPortfolio').and.returnValue({
            $loaded: function (callback) { callback(); }
        });
        createController = function () {
            ctrl = $controller('PortfolioCtrl', { $scope: $rootScope.$new() });
        };
    }));

    describe('it hooks into services', function () {
        it('calls the getPortfolio function', function () {
            expect(getPort