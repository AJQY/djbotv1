describe('Main', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope, $httpBackend, AuthenticationService) {
        AuthenticationService.auth.data = {
            uid: 'AAA'
        };
        spyOn(AuthenticationService, 'getUserID').and.returnValue('1');


        $httpBackend.whenGET('json.js').respond({
            'chart-options': {
                'chart': {}
            }
        });

        $scope = $rootScope.$new();
        elem = $compile('<main></main>')($scope);
        $scope.$digest();
    }));

    describe('initialization', function () {
        it('creates the element', function () {
            expect(elem).toBeDefined();
        });
    });
});