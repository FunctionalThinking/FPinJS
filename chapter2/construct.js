/*
chapter 2:
*/

var _ = require('lodash'),
	cat = require('./cat').cat;

function construct(head, tail) {
	return cat([head], _.toArray(tail));
}

exports.construct = construct;
