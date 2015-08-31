/*
chapter 6: recursion
*/

var trampoline	= require('./trampoline').trampoline,
	partial1	= require('../chapter4/partial1').partial1,
	evenOline	= require('../chapter6/recursion_partial').evenOline,
	oddOline	= require('../chapter6/recursion_partial').oddOline;

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

// console.log(isOddSafe(2000001));
//=> true

// console.log(isEvenSafe(2000001));
//=> false
