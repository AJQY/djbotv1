describe('RealTimeTradeCtrl', function () {
    var ctrl, AuthenticationService;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope, _AuthenticationService_) {
        ctrl = $controller('RealTimeTradeCtrl', {
            $scope: $rootScope.$new()
        });

        AuthenticationService = _AuthenticationService_;
    }));

    describe('initialization', function () {
        it('sets up the loading styles', function () {
            expect