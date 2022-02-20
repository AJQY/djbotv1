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
        svc.portfolio = [{ symbol: 'AAPL', percentage: '40' }];
        svc.portfolio.$add = _.noop;
        svc.portfolio.$save = _.noop;
        svc.portfolio.$remove = _.noop;
    }));

    describ