/**
* @ngdoc controller
* @name RealTimeTrade.controller:LoadingCtrl
*
* @description
*
* @requires $scope
* @requires $mdDialog
**/
angular.module('RealTimeTrade').controller('LoadingCtrl', function ($scope, $mdDialog) {
    $mdDialog.show({
        templateUrl: 'general/loading/loading.html',
        escapeToClose: false
    });
    
    $scope.$on('$destroy', function () {
      $mdDialog.hide();
    });
});