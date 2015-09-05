/*
Purity, immutability and policies for change
*/

var _ = require('lodash'),
	repeatedly = require('../hof/repeatedly').repeatedly;

var rand = _.partial(_.random, 1, _, false);

rand(10);
//=> 7

repeatedly(10, _.partial(rand, 10));
//=> [2, 6, 6, 7, 7, 4, 4, 10, 8, 5]

_.take(repeatedly(100, _.partial(rand, 10)), 5);
//=> [9, 6, 6, 4, 6]

exports.rand = rand;
