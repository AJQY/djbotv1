angular.module('RealTimeTrade').factory('ToastService', function ($mdToast) {
  var svc = this;

  svc.toast = function(message: string, style: string) {
    $mdToast.show({
      template: '<md-toast><span flex style=