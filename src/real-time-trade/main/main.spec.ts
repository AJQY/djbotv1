describe('Main', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope, $httpBackend, AuthenticationService) {
        AuthenticationService.auth.data = {
            uid: 'AAA'
        };
        spyOn(AuthenticationService, 'getUserID').and.returnValue('1');


        $httpBackend.w