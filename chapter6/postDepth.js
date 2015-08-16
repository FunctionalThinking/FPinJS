/*
chapter 6: recursion
*/

var _ = require('lodash'),
	visit = require('./visit').visit,
	partial1 = require('../chapter4/partial1').partial1;

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

console.log(postDepth(_.identity, influences));
//=> [['Lisp', 'Smalltalk'], ['Lisp', 'Scheme'], ...]

console.log(postDepth(function(x) {
	if (x === 'Lisp')
		return "LISP";
	else
		return x;
}, influences));
//=> [['LISP', 'Smalltalk'], ['LISP', 'Scheme'], ...]

console.log(influences);
//=> [['Lisp', 'Smalltalk'], ['Lisp', 'Scheme'], ...]

exports.postDepth = postDepth;
