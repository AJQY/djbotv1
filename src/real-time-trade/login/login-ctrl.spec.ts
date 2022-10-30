describe('LoginCtrl', function () {
    var ctrl, createController, $mdDialog;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller,