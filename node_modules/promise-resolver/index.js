'use strict';
module.exports = makeResolver;
module.exports.defer = defer;
var bluebird = require('native-or-bluebird/promise');
var safecb = require('safecb');

function makeResolver(resolve, reject, cb) {
	cb = safecb(cb);
	return function (err, result) {
		if (err && reject) {
			reject(err);
		} else if (resolve) {
			resolve(result);
		}
		cb.apply(null, arguments);
	};
}

function defer(cb, Promise) {
	Promise = Promise || bluebird;
	var callback;
	var promise;
	if (Promise) {
		promise = new Promise(function (resolve, reject) {
			callback = makeResolver(resolve, reject, cb);
		});
		if (cb) {
			// Suppress 'unhandledRejection' events - assume the callback handles them.
			promise.catch(function () {});
		}
	} else if (cb) {
		callback = safecb(cb);
	} else {
		throw new Error('No Promise Implementation: You must use a callback function, upgrade to Node >= 0.11.13, or install bluebird');
	}

	return new Deferred(callback, promise);
}

function Deferred(cb, promise) {
	this.cb = cb;
	this.promise = promise;
}

Object.defineProperties(Deferred.prototype, {
	resolve: {
		enumerable: true,
		get: function () {
			return this.cb.bind(null, null);
		}
	},
	reject: {
		enumerable: true,
		get: function () {
			var cb = this.cb;
			return function (reason) {
				if (reason) {
					cb.apply(null, arguments);
				} else {
					cb(new Error('reject called with falsie reason'));
				}
			};
		}
	}
});
