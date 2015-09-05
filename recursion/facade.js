/*
Recursion
*/

var trampoline	= require('./trampoline').trampoline,
	partial1	= require('../composition/partial1').partial1,
	evenOline	= require('../recursionPartial').evenOline,
	oddOline	= require('../recursionPartial').oddOline;

function isEvenSafe(n) {
	if (n === 0)
		return true
	else
		return trampoline(partial1(oddOline, Math.abs(n) - 1));
}

function isOddSafe(n) {
	if (n === 0)
		return false;
	else
		return trampoline(partial1(evenOline, Math.abs(n) - 1));
}

isOddSafe(2000001);
//=> true

isEvenSafe(2000001);
//=> false
