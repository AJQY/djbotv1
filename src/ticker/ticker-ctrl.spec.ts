
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
