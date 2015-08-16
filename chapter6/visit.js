/*
chapter 6: recursion
*/

var _ = require('lodash');

function visit(mapFun, resultFun, array) {
	if (_.isArray(array))
		return resultFun(_.map(array, mapFun));
	else
		return resultFun(array);
}

console.log(visit(_.identity, _.isNumber, 42);
//=> 42

console.log(visit(_.isNumber, _.identity, [1, 2, null, 3]);
//=> [true, true, false, true]

console.log(visit(function(n) { return n*2; }, rev, _.range(10));
//=> [18, 16, 14, 12, 10, 8, 6, 4, 2, 0]

exports.visit = visit;
