angular.module('RealTimeTrade').factory('PortfolioService', function ($firebaseArray, $mdDialog) {
  var svc = this;
  svc.portfolio;

  svc.getPortfolio = function (uid: string) {
    var portfolioRef = new Firebase('https://realtimetrade.firebaseio.com/portfoli