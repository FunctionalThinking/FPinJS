var _ = require('lodash'),
	repeatedly = require('../util/chapter6').repeatedly,
	rand = require('./rand').rand;

var freq = _.curryRight(_.countBy)(_.identity)(null);
var a = repeatedly(1000, _.partial(rand, 2));
var copy = _.clone(a);


freq(a);
// console.log(freq(a));

_.isEqual(a, copy);
// console.log(_.isEqual(a, copy));
//=> true
