
//Dependencies
var _ = require('lodash');
var http = require('q-io/http');
var Q = require('q');
var moment = require('moment');
var timezone = require('moment-timezone');
var Firebase = require('firebase');
var yahooFinance = require('yahoo-finance');
var token = require('./token.js');

//Initialize variables
var ref = new Firebase('https://realtimetrade.firebaseio.com');
var usersRef = ref.child('users');
var seriesRef = ref.child('series');
var portfoliosRef = ref.child('portfolios');
var EDT = 'America/New_York';

//Update player's portfolio
function updatePortfolio() {
    usersRef.once('value', function (users) {
        return _.forOwn(users.val(), function (user) {
            if (user.uid) {
                getEarnings(user.uid);
            }
        });
    });
}

function getEarnings(uid) {
    var userEarnings = seriesRef.child(uid);
    //Push the new earnings to the database
    userEarnings.orderByChild('0').limitToLast(1).once('value', function (previousEarningsArr) {
        var portfolioRef = portfoliosRef.child(uid);
