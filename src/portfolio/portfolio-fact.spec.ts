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

    describe('getPortfolio', function () {
        it('should have an getPortfolio function', function () {
            expect(_.isFunction(svc.getPortfolio)).toBeTruthy();
        });
    });

    describe('addStock', function () {
        var spy;

        beforeEach(function () {
            spy = spyOn(svc.portfolio, '$add');
        });

        it('should have an addStock function', function () {
            expect(_.isFunction(svc.addStock)).toBeTruthy();
        });

        it('should do nothing if bad data is passed', function () {
            svc.addStock();
            svc.addStock('AAPL');
            svc.addStock({ ticker: 'GOOG' });
            svc.addStock({ symbol: 'AAPL' });
            expect(spy).not.toHaveBeenCalled();
        });

        it('should call the database if good data is passed', function () {
            svc.addStock({ symbol: 'GOOG' });
            expect(spy).toHaveBeenCalledWith({ symbol: 'GOOG', percentage: 0 });
        });
    });

    describe('saveStock', function () {
        it('should have an saveStock function', function () {
            expect(_.isFunction(svc.saveStock)).toBeTruthy();
        });

        it('calls the save function', function () {
            var spy = spyOn(svc.portfolio, '$save');
            svc.saveStock({ symbol: 'HELLO' });
            expect(spy).toHaveBeenCalledWith({ symbol: 'HELLO' });
        });
    });

    describe('deleteStock', function () {
        it('should have an deleteStock function', function () {
            expect(_.isFunction(svc.deleteStock)).toBeTruthy();
        });

        it('should call into the dialog service', function () {
            spyOn($mdDialog, 'confirm').and.callThrough();
            spyOn($mdDialog, 'show').and.returnValue($q.when());
            spyOn(svc.portfolio, '$remove');
            svc.deleteStock();
            $rootScope.$apply();
            expect($mdDialog.confirm).toHaveBeenCalled();
            expect($mdDialog.show).toHaveBeenCalled();
            expect(svc.portfolio.$remove).toHaveBeenCalled();
        });
    });

    describe('getUnusedPercentage', function () {
        it('should have an getUnusedPercentage function', function () {
            expect(_.isFunction(svc.getUnusedPercentage)).toBeTruthy();
        });

        it('should correctly sum up the remaining percentage of a portfolio', function () {
            expect(svc.getUnusedPercentage()).toEqual(60);
        });

        it('should add on the optional parameter if provided', function () {
            expect(svc.getUnusedPercentage(30)).toEqual(90);
        });
    });
});