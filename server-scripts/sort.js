
//Dependencies
var token = require('./token.js');
var Firebase = require('firebase');
var _ = require('lodash');

var series = new Firebase('https://realtimetrade.firebaseio.com/series');

function sortUsers(ref) {
	token.authenticate(ref, 'admin').then(function () {
		ref.once('value', function (s) {
			console.log('Sorting utility started');
			s.forEach(sort);
		});
	});
}

function sort(user) {
	user.ref().orderByChild('0').once('value', function (series) {
		user.ref().set(series.val());
	});
}

module.exports.sortUsers = sortUsers;