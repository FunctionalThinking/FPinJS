/*
Recursion
*/

var visit = require('./visit').visit,
	partial1 = require('../composition/partial1').partial1;

function preDepth(fun, ary) {
	return visit(partial1(preDepth, fun), fun, fun(ary));
}
