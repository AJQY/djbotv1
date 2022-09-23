/**
* @ngdoc directive
* @name RealTimeTrade.component:stockSlider
* @element stock-slider
* @scope
*
* @description
**/
angular.module('RealTimeTrade').component('stockSlider', {
  templateUrl: 'portfolio/stock-slider/stock-slider.html',
  controller: 'StockSliderCtrl',
  transclude: true,
  bindings: {
    stock: '<'
  }
});