describe('Portfolio', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope, $httpBackend, AuthenticationServi