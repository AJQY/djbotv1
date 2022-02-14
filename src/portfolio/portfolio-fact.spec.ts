describe('PortfolioService', function () {
    var svc, $mdDialog, $q, $rootScope;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (_$rootScope_, _PortfolioService_, _$q_, _$mdDialog_) {
    