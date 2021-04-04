var Q = require('q');
var FirebaseTokenGenerator = require('firebase-token-generator');
var _ = require('lodash');

function authenticate(ref, uid) {
	var defer = Q.defer();
	var secret = process.env.FIREBASE_SE