var Q = require('q');
var FirebaseTokenGenerator = require('firebase-token-generator');
var _ = require('lodash');

function authenticate(ref, uid) {
	var defer = Q.defer();
	var secret = process.env.FIREBASE_SECRET || _.get(require('../env.json'), 'FIREBASE_SECRET');

	if (!secret) {
		defer.reject();
	}

	else {
		var options = {};
		if (uid === 'admin') {
			options.admin = true;
		}

		var tokenGenerator = new FirebaseTokenGenerator(secret);
		var token = tokenGenerator.createToken({ uid: uid }, options);

		ref.authWithCustomToken(token,
			function (error) {
				if (!error) {
					defer.resolve();
				} else {
					console.error(error);
					defer.reject(error);
				}
			});
	}

	return defer.promise;
}

module.exports.authenticate = authenticate;