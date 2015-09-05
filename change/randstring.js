/*
Purity, immutability and policies for change
*/

var _ = require('lodash'),
	rand = require('./rand').rand,
	repeatedly = require('../hof/repeatedly').repeatedly;

function randString(len) {
	var ascii = repeatedly(len, _.partial(rand, 35));
	return _.map(ascii, function(n) {
		return n.toString(36);
	}).join('');
}

randString(0);
//=> ""
randString(1);
//=> "f"
randString(10);
//=> "k52k7bae8p"

exports.randString = randString;
