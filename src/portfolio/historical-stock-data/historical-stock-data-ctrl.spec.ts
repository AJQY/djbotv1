
describe('HistoricalStockDataCtrl', function () {
    var ctrl, createController, HistoricalStockDataService, $q, $rootScope, chartSpy;

    beforeEach(function () {
        module('RealTimeTrade');
    });

    beforeEach(inject(function ($controller, _$rootScope_, _$q_, _HistoricalStockDataService_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        HistoricalStockDataService = _HistoricalStockDataService_;
        createController = function (symbol) {
            chartSpy = jasmine.createSpyObj('chart', ['hideLoading', 'reflow', 'addSeries']);
            ctrl = $controller('HistoricalStockDataCtrl', {}, { symbol: symbol, chart: chartSpy });
        };
    }));

    describe('initialization', function () {
        it('creates the chart options', function () {
            createController();
            expect(_.isObject(ctrl.chartOptions)).toBeTruthy();
        });

        it('does only calls the historical data service with proper symbol', function () {
            spyOn(HistoricalStockDataService, 'getHistoricalStockValues').and.returnValue($q.reject());

            createController();
            createController(3);
            createController('');
            createController({ symbol: 'GOOGL' });
            createController('GOOGLE');
            expect(HistoricalStockDataService.getHistoricalStockValues).not.toHaveBeenCalled();

            createController('GOOGL');
            expect(HistoricalStockDataService.getHistoricalStockValues).toHaveBeenCalled();
        });

        it('sets some chart data on success', function () {
            spyOn(HistoricalStockDataService, 'getHistoricalStockValues').and.returnValue($q.when(['1']));

            createController('GOOG');
            $rootScope.$apply();
            expect(ctrl.chart.addSeries).toHaveBeenCalledWith(({ name: 'GOOG', data: ['1'] }));
        });

        it('cleans itself up regardless of success or failure', function () {
            spyOn(HistoricalStockDataService, 'getHistoricalStockValues').and.returnValue($q.reject());

            createController('GOOG');
            $rootScope.$apply();
            expect(ctrl.chart.hideLoading).toHaveBeenCalled();
            expect(ctrl.chart.reflow).toHaveBeenCalled();
        });
    });
});