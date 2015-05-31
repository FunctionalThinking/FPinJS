var _ = require('lodash'),
	rand = require('./rand').rand,
	repeatedly = require('../util/chapter6').repeatedly;

function randString(len) {
	var ascii = repeatedly(len, _.partial(rand, 35));
	return _.map(ascii, function(n) {
		return n.toString(36);
	}).join('');
}

var result1 = randString(0),
	result2 = randString(1),
	result3 = randString(10);

// console.log(result1);
// console.log(result2);
// console.log(result3);

exports.randString = randString;
