/*
chapter 6: recursion
*/

var _ = require('lodash'),
	evenOline = require('./recursion_partial').evenOline,
	oddOline = require('./recursion_partial').oddOline;

function trampoline(fun) {
	var result = fun.apply(fun, _.rest(arguments));

	while (_.isFunction(result)) {
		result = result();
	}

	return result;
}

// console.log(trampoline(oddOline, 3));
//=> true

// console.log(trampoline(evenOline, 200000));
//=> true

// console.log(trampoline(oddOline, 300000));
//=> false

// console.log(trampoline(evenOline, 200000000));
//=> true

exports.trampoline = trampoline;
