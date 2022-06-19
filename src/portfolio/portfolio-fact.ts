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

  //Delete a stock from a player
  svc.deleteStock = function (event, index: number) {
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete this stock?')
      .textContent('Please confirm that you would like to delete this stock.')
      .ariaLabel('Delete stock')
      .targetEvent(event)
      .ok('Confirm')
      .cancel('Cancel');

    $mdDialog.show(confirm).then(function () {
      svc.portfolio.$remove(index);
    });
  };
	
  //Find what percentage of the portfolio is unused (int between 0 and 100, inclusive).
  //Optionally tacks on an extra addition number.
  svc.getUnusedPercentage = function (plus: number) {
    return 100 - (_.sumBy(svc.portfolio, 'percentage') || 0) + (plus || 0);
  };

  return svc;
});