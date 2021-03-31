
//Dependencies
var moment = require('moment-timezone');

//Initialize variables
var EDT = 'America/New_York';
var MARKET_OPEN = moment().tz(EDT).hour(9).minute(30);
var MARKET_CLOSE = moment().tz(EDT).hour(16);



//Check if the stock market is open
function isMarketOpen() {
	var now = moment().tz(EDT);

	if (now.day() < 1 || now.day() > 5) {
		return false;
	}

	if (isNationalHoliday(now)) {
		return false;
	}
	
	return now.isBetween(MARKET_OPEN, MARKET_CLOSE);
}

//Check if it is a national holiday
function isNationalHoliday(date) {
	/*
		Due to complexity of holidays, currently it'll be hardcoded with each day of the year for now.
		This will need to be updated each year.
		
		The following are the stock market off days:
		-New Year's Day
		-Martin Luther King, Jr. Day
		-President's Day
		-Good Friday
		-Memorial Day
		-Independence Day
		-Labor Day
		-Thanksgiving Day
		-Christmas Day
		
		As well as an early close (1 PM) on Thanksgiving and Christmas. (currently unimplemented)
	*/
	var holidays = {
		'09/07/15': 'Labor Day',
		'11/26/15': 'Thanksgiving Day',
		'12/25/15': 'Christmas Day',
		'01/01/16': 'New Year\'s Day',
		'01/18/16': 'Martin Luther King, Jr. Day',
		'02/15/16': 'President\'s Day',
		'03/25/16': 'Good Friday',
		'05/30/16': 'Memorial Day',
		'07/04/16': 'Independence Day',
		'09/05/16': 'Labor Day',
		'11/24/16': 'Thanksgiving Day',
		'12/26/16': 'Christmas Day'
	};

	return holidays[date.format('MM/DD/YY')];
}

module.exports.isMarketOpen = isMarketOpen;