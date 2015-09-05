/*
Recursion
*/

var _ = require('lodash'),
	partial1 = require('../composition/partial1').partial1;

function evenOline(n) {
	if (n === 0)
		return true;
	else
		return partial1(oddOline, Math.abs(n) - 1);
}

function oddOline(n) {
	if (n === 0)
		return false;
	else
		return partial1(oddOline, Math.abs(n) - 1);
}

evenOline(0);
//=> true

oddOline(0);
//=> false

oddOline(3);
//=> function () { return evenOline(Math.abs(n) - 1); }

oddOline(3)();
//=> function () { return oddOline(Math.abs(n) - 1); }

oddOline(3)()();
//=> function () { return evenOline(Math.abs(n) - 1); }

oddOline(3)()()();
//=> true

// oddOline(20000001)()()(); //... a bunch more ()s
//=> true

exports.evenOline = evenOline;
exports.oddOline = oddOline;
