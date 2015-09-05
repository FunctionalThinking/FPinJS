/*
Recursion
*/

var _ = require('lodash'),
	evenOline = require('./recursionPartial').evenOline,
	oddOline = require('./recursionPartial').oddOline;

function trampoline(fun) {
	var result = fun.apply(fun, _.rest(arguments));

	while (_.isFunction(result)) {
		result = result();
	}

	return result;
}

trampoline(oddOline, 3);
//=> true

trampoline(evenOline, 200000);
//=> true

trampoline(oddOline, 300000);
//=> false

trampoline(evenOline, 200000000);
//=> true

exports.trampoline = trampoline;
