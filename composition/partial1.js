/*
Function Bulding Functions
*/

var _ = require('lodash'),
	construct = require('../first-class/construct').construct
    div = require('./curry2').div;

function partial1(fun, arg1) {
	return function() {
		var args = construct(arg1, arguments);
		return fun.apply(fun, args);
	}
}

var over10Part1 = partial1(div, 10);
over10Part1(5);
//=> 2

exports.partial1 = partial1;
