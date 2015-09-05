/*
Variable Scope and Closures
*/

var _ = require('lodash');

function createScaleFunction(FACTOR) {
	return function(v) {
		return _.map(v, function(n) {
			return (n * FACTOR);
		});
	};
}

var scale10 = createScaleFunction(10);

scale10([1, 2, 3]);
//=> [10, 20, 30]