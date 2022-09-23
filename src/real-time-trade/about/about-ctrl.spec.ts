
describe('AboutCtrl', function () {
    var ctrl, $mdDialog;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope, _$mdDialog_) {
        ctrl = $controller('AboutCtrl', {
            $scope: $rootScope.$new()
        });
        $mdDialog = _$mdDialog_;
    }));

    describe('openAbout', function () {
        it('has an openAbout', function () {
            expect(_.isFunction(ctrl.openAbout)).toBeTruthy();
        });

        it('opens a dialog', function () {
            spyOn($mdDialog, 'show');
            ctrl.openAbout();
            expect($mdDialog.show).toHaveBeenCalled();
        });
    });
});