/*
first-class functions and applicative programming
*/

var _ = require('lodash'),
	cat = require('./cat').cat;

function construct(head, tail) {
	return cat([head], _.toArray(tail));
}

construct(42, [1, 2, 3]);
//=> [42, 1, 2, 3]

exports.construct = construct;
