var average = require('../util/chapter2').average;

function averageDamp(FUN) {
	return function(n) {
		return average([n, FUN(n)]);
	};
}

var averageSq = averageDamp(function(n) { return n * n; });
averageSq(10);
// console.log(averageSq(10));
//=> 55