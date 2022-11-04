describe('LoginCtrl', function () {
    var ctrl, createController, $mdDialog;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, $rootScope, _$mdDialog_) {
        createController = function () {
            ctrl = $controller('LoginCtrl', {
                $scope: $rootScope.$new()
            });
        }

        $mdDialog = _$mdDialog_;
    }));

    describe('initialization', function () {
        it('opens the login modal', function () {
            spyOn($mdDialog, 'show');
            createController();
            expect($mdDialog.show).toHaveBeenCalled();
        });
    });
});