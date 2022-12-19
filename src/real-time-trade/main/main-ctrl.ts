/**
* @ngdoc controller
* @name RealTimeTrade.controller:MainCtrl
*
* @description
**/
angular.module('RealTimeTrade').controller('MainCtrl', function ($scope) {
  var ctrl = this;
  
  $scope.$on('$stateChan