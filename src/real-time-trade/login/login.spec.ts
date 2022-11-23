describe('Login', function () {
    var $scope, elem, $mdDialog;

    beforeEach(module('RealTimeTrade', 'RealTimeTrade.Templates'));

    beforeEach(inject(function ($compile, $rootScope, _$mdDialog_) {
        $scope = $rootScope.$new();
        $mdDialog = _$mdDialog_;
        elem = $compile('<login></login>')($scope);
        $scope.$digest();
    }));

    describe('on destruction', function () {
        it('hides the dialog', function () {
            spyOn($mdDialog, 'hide');
            $scope.$destroy();
            expect($mdDialog.hide).toHaveBeenCalled();
        });
    });
});