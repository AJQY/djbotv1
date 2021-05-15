describe('Loading', function () {
    var $scope, elem, $mdDialog;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope, _$mdDialog_) {
        $scope = $rootScope.$new();
        $mdDialo