/**
* @ngdoc controller
* @name RealTimeTrade.controller:TickerCtrl
*
* @description
*
* @requires $q
* @requires $http
* @requires AuthenticationService
**/
angular.module('RealTimeTrade').controller('TickerCtrl', function($q: $q, $http: $http, AuthenticationService: AuthenticationService) {
  var ctrl = this;
  var auth = AuthenticationService.auth.data;
  ctrl.ref = new Firebase('https://realtimetrade.firebaseio.com').child('series').child(auth.uid);

  //Get lines for each player in active league
  $http.get('json.js')
    .then(setUpChart)
    .then(function() {
      ctrl.ref.orderByChild('0').once('value', renderUser)
    });
    
  //Services interface
  interface $q {
    when: Function
  }
  interface $http {
    get: Function
  }
  interface AuthenticationService {
    auth: {
      data: {
        uid: string
      }
    }
  }

  //Chart options interface
  interface IChartOptions {
    chart: {
      renderTo: HTMLElement
    }
  }

  //Series options interface
  interface ISeriesData {
    forEach: Function,
    ref: Function
  }

  //Data point interface
  interface IDataPoint {
    val: Function
  }

  //Set up the chart
  function setUpChart(json: { data: Object }) {
    var chartOptions: IChartOptions = json.data['chart-options'] || json.data['ticker/chart-options'];
    chartOptions.chart.renderTo = $('#stockTicker')[0];
    ctrl.chart = new Highcharts.StockChart(chartOptions);
    ctrl.chart.showLoading();
    ctrl.renderChart = _.debounce(ctrl.chart.redraw, 10000);
    return $q.when();
  }

  function renderUser(seriesData: ISeriesData) {
    var line = ctrl.chart.addSeries({});

    //Set initial data
    var data: number[] = [];
    seriesData.forEach(function(value: IDataPoint) {
      data.push(value.val());
    });
    line.setData(data);
    ctrl.chart.hideLoading();

    //Update lines as new values come in
    seriesData.ref().limitToLast(1).on('child_added', function(point: IDataPoint) {
      line.addPoint(point.val(), false);
      ctrl.renderChart();
    });
  }
});