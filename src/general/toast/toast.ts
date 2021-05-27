angular.module('RealTimeTrade').factory('ToastService', function ($mdToast) {
  var svc = this;

  svc.toast = function(message: string, s