describe('RealTimeTrade', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope.$new();
        elem = $compile('<real-time-trade></real-time-trade>')($scope);
        $scope.$digest();
    }));

    descri