describe('Logout', function () {
    var $scope, elem;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope) {
        $scope = $rootScope.$new();
        elem = $compile('<logout></logout>')($scope);
        $scope.$digest();
    }));

    descr