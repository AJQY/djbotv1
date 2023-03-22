describe('Ticker', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $httpBackend, $rootSc