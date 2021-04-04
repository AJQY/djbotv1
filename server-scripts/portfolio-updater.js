//Initialize variables
var PORTFOLIO_UPDATER;
var isUpdaterActive = false;
var FETCH_INTERVAL = 20 * 1000;

//Node scripts
var marketOpen = require('./market-open.js');
var updatePortfolio = require('./update-portfolio.js');

//Initialize checker
function initialize() {
	checkTime();
	setInterval(checkTime, FETCH_INTERVAL);
}

//Check the time
function checkTime() {
	var isMarketOpen = marketOpen.isMarketOpen();

	console.log('Checking time...', isMarketOpen);

	if (!isUpdaterActive && isMarketOpen) {
		startPortfolioUpdater();
	}
	else if (isUpdaterActive && !isMarketOpen) {
		stopPortfolioUpdater();
	}
}

//Start the portfolio updater
function startPortfolioUpdater() {
	PORTFOLIO_UPDATER = setInterval(updatePortfolio.updatePortfolio, FETCH_INTERVAL);
	isUpdaterActive = true;
	console.log('Portfolio updater started');
}

//Stop the portfolio updater
function stopPortfolioUpdater() {
	clearInterval(PORTFOLIO_UPDATER);
	isUpdaterActive = false;
	console.log('Portfolio updater stopped');
}

module.exports.initialize = initialize;