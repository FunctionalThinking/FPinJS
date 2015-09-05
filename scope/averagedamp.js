/*
Variable Scope and Closures
*/

var average = require('../first-class/average').average;

function averageDamp(FUN) {
	return function(n) {
		return average([n, FUN(n)]);
	};
}

var averageSq = averageDamp(function(n) { return n * n; });
averageSq(10);
//=> 55