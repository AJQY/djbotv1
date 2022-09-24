
describe('AboutDialogCtrl', function () {
    var ctrl, $mdDialog;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope, _$mdDialog_) {
        ctrl = $controller('AboutDialogCtrl', {
            $scope: $rootScope.$new()
        });
        $mdDialog = _$mdDialog_;
    }));

    describe('initialization', function () {
        it('has a closeDialog function', function () {
            expect(_.isFunction(ctrl.closeDialog)).toBeTruthy();
            spyOn($mdDialog, 'hide');
            ctrl.closeDialog();
            expect($mdDialog.hide).toHaveBeenCalled();
        });

        it('has an array of developers', function () {
            expect(_.isArray(ctrl.developers)).toBeTruthy();
            expect(ctrl.developers.length).toBeGreaterThan(0);
        });
    });
});