/*
Recursion
*/

var _ = require('lodash'),
    rev = require('../composition/dispatch').rev;

function visit(mapFun, resultFun, array) {
	if (_.isArray(array))
		return resultFun(_.map(array, mapFun));
	else
		return resultFun(array);
}

visit(_.identity, _.isNumber, 42);
//=> 42

visit(_.isNumber, _.identity, [1, 2, null, 3]);
//=> [true, true, false, true]

visit(function(n) { return n*2; }, rev, _.range(10));
//=> [18, 16, 14, 12, 10, 8, 6, 4, 2, 0]

exports.visit = visit;
