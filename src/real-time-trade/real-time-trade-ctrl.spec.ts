describe('RealTimeTradeCtrl', function () {
    var ctrl, AuthenticationService;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope, _AuthenticationSer