/*
Recursion
*/

var _ = require('lodash'),
	visit = require('./visit').visit,
	partial1 = require('../composition/partial1').partial1;

function postDepth(fun, ary) {
	return visit(partial1(postDepth, fun), fun, ary);
}

var influences = [
	['Lisp', 'Smalltalk'],
	['Lisp', 'Scheme'],
	['Smalltalk', 'Self'],
	['Scheme', 'JavaScript'],
	['Scheme', 'Lua'],
	['Self', 'Lua'],
	['Self', 'JavaScript']];

postDepth(_.identity, influences);
//=> [['Lisp', 'Smalltalk'], ['Lisp', 'Scheme'], ...]

postDepth(function(x) {
	if (x === 'Lisp')
		return "LISP";
	else
		return x;
}, influences);
//=> [['LISP', 'Smalltalk'], ['LISP', 'Scheme'], ...]

influences;
//=> [['Lisp', 'Smalltalk'], ['Lisp', 'Scheme'], ...]

exports.postDepth = postDepth;
