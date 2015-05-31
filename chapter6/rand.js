var _ = require('lodash'),
	repeatedly = require('../util/chapter6').repeatedly;

var rand = _.partial(_.random, 1, _, false);

rand(10);
// console.log(rand(10));

repeatedly(10, _.partial(rand, 10));
// console.log(repeatedly(10, _.partial(rand, 10)));

_.take(repeatedly(100, _.partial(rand, 10)), 5);
// console.log(_.take(repeatedly(100, _.partial(rand, 10)), 5));

exports.rand = rand;
