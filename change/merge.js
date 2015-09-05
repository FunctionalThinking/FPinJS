/*
Purity, immutability and policies for change
*/

var _ = require('lodash'),
	construct = require('../first-class/construct').construct;

function merge() {
	return _.extend.apply(null, construct({}, arguments));
}
