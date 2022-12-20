/**
* @ngdoc controller
* @name RealTimeTrade.controller:MainCtrl
*
* @description
**/
angular.module('RealTimeTrade').controller('MainCtrl', function ($scope) {
  var ctrl = this;
  
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    ctrl.selectedTab = toState.data.selectedTab;
  });
});