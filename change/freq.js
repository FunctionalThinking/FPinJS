/*
Purity, immutability and policies for change
*/

var _ = require('lodash'),
	repeatedly = require('../hof/repeatedly').repeatedly,
	rand = require('./rand').rand;

var freq = _.curryRight(_.countBy)(_.identity)(null);
var a = repeatedly(1000, _.partial(rand, 2));
var copy = _.clone(a);


freq(a);
//=> {1: 498, 2: 502}

_.isEqual(a, copy);
//=> true
