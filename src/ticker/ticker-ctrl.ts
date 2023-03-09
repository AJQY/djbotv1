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
      renderTo: HTMLElemen