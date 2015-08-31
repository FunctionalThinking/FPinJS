/*
chapter 6: trampoline
*/

var _ = require('lodash'),
	partial1 = require('../chapter4/partial1').partial1;

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

// console.log(evenOline(0));
//=> true

// console.log(oddOline(0));
//=> false

// console.log(oddOline(3));
//=> function () { return evenOline(Math.abs(n) - 1); }

// console.log(oddOline(3)());
//=> function () { return oddOline(Math.abs(n) - 1); }

// console.log(oddOline(3)()());
//=> function () { return evenOline(Math.abs(n) - 1); }

// console.log(oddOline(3)()()());
//=> true

// oddOline(20000001)()()(); //... a bunch more ()s
//=> true

exports.evenOline = evenOline;
exports.oddOline = oddOline;
