angular.module('RealTimeTrade').factory('PortfolioService', function ($firebaseArray, $mdDialog) {
  var svc = this;
  svc.portfolio;

  svc.getPortfolio = function (uid: string) {
    var portfolioRef = new Firebase('https://realtimetrade.firebaseio.com/portfolios');
    svc.portfolio = $firebaseArray(portfolioRef.child(uid));
    return svc.portfolio;
  };
	
  //Add a stock to a player
  svc.addStock = function (stock: {symbol: string}) {
    if (!stock || !svc.portfolio || !stock.symbol || _.some(svc.portfolio, { symbol: stock.symbol })) {
      return;
    }

    stock.percentage = 0;
    svc.portfolio.$add(stock);
  };
	
  //Save changes to a stock
  svc.saveStock = function (stock) {
    svc.portfolio.$save(stock);
  };

  //Delete a stock f