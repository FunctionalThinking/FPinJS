/*
Higher-Order Functions
*/

var _ = require('lodash'),
	always = require('./always').always;

function checker() {
	var validators = _.toArray(arguments);

	return function(obj) {
		return _.reduce(validators, function (errs, check) {
			if (check(obj)) return errs;
			else return _.chain(errs).push(check.message).value();
		}, []);
	};
}

var alwaysPasses = checker(always(true), always(true));
alwaysPasses({});
//=> []

var fails = always(false);
fails.message = "a failure in life";
var alwaysFails = checker(fails);
alwaysFails = checker(fails)
alwaysFails({});
//=> ["a failure in life"]

function validator(message, fun) {
	var f = function() {
		return fun.apply(fun, arguments);
	}

	f['message'] = message;
	return f;
}

var gonnaFail = checker(validator("ZOMG!", always(false)));
gonnaFail(100);
//=> ["ZOMG!"]

function aMap(obj) {
	return _.isObject(obj);
}

var checkCommand = checker(validator("must be a map", aMap));

checkCommand({});
//=> true
checkCommand(42);
//=> ["must be a map"]

function hasKeys() {
	var KEYS = _.toArray(arguments);

	var fun = function(obj) {
		return _.every(KEYS, function(k) {
			return _.has(obj, k);
		});
	};

	fun.message = [["Must have values for keys:"], KEYS].join(" ");
	return fun;
}

var checkCommand = checker(	validator("must be a map", aMap),
	hasKeys('msg', 'type'));

checkCommand({msg: 'blah', type: 'display'});
//=> []
checkCommand(32);
//=> ["must be a map", "Must have values for keys: mst type"]
checkCommand({});
//=> ["Must have values for keys: msg type"]

exports.checker = checker;
exports.validator = validator;
exports.hasKeys = hasKeys;