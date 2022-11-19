describe('Login', function () {
    var $scope, elem, $mdDialog;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope, _$mdDialog_) {
        $scope = $rootScope.$new();
        $mdDialog = _$mdDialog_;
   