
describe('HistoricalStockData', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope, $httpBackend) {
        $scope = $rootScope.$new();
        elem = $compile('<historical-stock-data></historical-stock-data>')($scope);
        $scope.$digest();
    }));

    describe('initialization', function () {
        it('creates the element', function () {
            expect(elem).toBeDefined();
        });
    });
});