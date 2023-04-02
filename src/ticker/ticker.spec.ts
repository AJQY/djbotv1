describe('Ticker', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $httpBackend, $rootScope, AuthenticationService) {
        AuthenticationService.auth.data = {
            uid: 'AAA'
        };

        $httpBackend.whenGET('json.js').respond({
            'chart-options': {
                'chart': {}
            }
        });

        $scope = $rootScope.$new();
        elem = $compile('<ticker></ticker>')($scope);
        $scope.$digest();
    }));

    describe('initialization', function () {
        it('creates the element', function () {
            expect(elem).toBeDefined();
        });
    });
});