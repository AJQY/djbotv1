describe('RealTimeTrade', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope.$new();
        elem = $compile('<real-time-trade></real-time-trade>')($scope);
        $scope.$digest();
    }));

    describe('initialization', function () {
        it('creates the element', function () {
            expect(elem).toBeDefined();
        });
    });
});