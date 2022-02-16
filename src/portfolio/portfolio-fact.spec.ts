describe('PortfolioService', function () {
    var svc, $mdDialog, $q, $rootScope;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function (_$rootScope_, _PortfolioService_, _$q_, _$mdDialog_) {
        svc = _PortfolioService_;
        $rootScope = _$rootScope_;
        $mdDialog = _$mdDialog_;
        $q = _$q_;
        
        //Mock out the firebase array
  