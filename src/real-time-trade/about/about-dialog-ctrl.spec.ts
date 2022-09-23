
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