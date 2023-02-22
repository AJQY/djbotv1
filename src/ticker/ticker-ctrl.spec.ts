
describe('TickerCtrl', function () {
    var ctrl, createController, $httpBackend, line;

    beforeEach(function () {
        module('mock.firebase', 'RealTimeTrade');
    });

    beforeEach(inject(function ($rootScope, $controller, _$httpBackend_, AuthenticationService) {
        $httpBackend = _$httpBackend_;

        createController = function () {
            ctrl = $controller('TickerCtrl', { $scope: $rootScope.$new() });
            ctrl.ref.set(['TEST']);
            ctrl.ref.flush();
            $httpBackend.flush();
            ctrl.ref.flush();
        };

        line = jasmine.createSpy('line');

        Highcharts.StockChart = function () {
            return {
                showLoading: function () { },
                hideLoading: function () { },
                redraw: function () { },
                addSeries: function () {
                    return {
                        setData: line,
                        addPoint: function () { }
                    }
                },
                drawSeries: function () { }
            }
        };

        AuthenticationService.auth.data = {
            uid: 'AAAAA'
        };

        $httpBackend.whenGET('json.js').respond({
            'chart-options': {
                'chart': {}
            }
        });
    }));

    describe('initialize', function () {
        it('sets up the chart', function () {
            createController();
            $httpBackend.expectGET('json.js');
        });

        it('creates the chart', function () {
            createController();
            expect(_.isObject(ctrl.chart)).toBeTruthy();
        });

        it('sets the initial data', function () {
            createController();
            expect(line).toHaveBeenCalledWith(['TEST']);
        });
    });

    describe('updating', function () {
        it('it updates when new children are added', function () {
            createController();
            spyOn(ctrl, 'renderChart');
            expect(ctrl.renderChart).not.toHaveBeenCalled();
            ctrl.ref.push({ TEST: 'HELLO' });
            ctrl.ref.flush();
            expect(ctrl.renderChart).toHaveBeenCalled();
        });
    });
});