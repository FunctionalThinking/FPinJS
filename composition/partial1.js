/*
chapter 5: function building functions
*/

var _ = require('lodash'),
	construct = require('../chapter2/construct').construct;

function partial1(fun, arg1) {
	return function() {
		var args = construct(arg1, arguments);
		return fun.apply(fun, args);
	}
}

// var over10Part1 = partial1(div, 10);
// console.log(over1-Part1(5));
//=> 2

exports.partial1 = partial1;
