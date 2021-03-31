//Initialize variables
var PORTFOLIO_UPDATER;
var isUpdaterActive = false;
var FETCH_INTERVAL = 20 * 1000;

//Node scripts
var marketOpen = require('./market-open.js');
var updatePortfolio = require('./u