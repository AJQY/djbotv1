angular.module('RealTimeTrade').config(function () {
  //Set global timezone to EST
  Highcharts.setOptions({
    global: {
      timezoneOffset: 5 * 60
    }
  });
});