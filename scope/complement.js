/*
Variable Scope and Closures
*/

var _ = require('lodash');

function complement(PRED) {
	return function() {
		return !PRED.apply(null, _.toArray(arguments));
	}
}

function isEven(n) { return (n % 2) === 0 };

var isOdd = complement(isEven);

isOdd(2);
//=> false

isOdd(413);
//=> true

// function isEven(n) { return false; }

// isEven(10);
// // //=> false

// isOdd(13);
// // //=> true

// isOdd(12);
//=> false

exports.complement = complement;
exports.isEven = isEven;
exports.isOdd = isOdd;