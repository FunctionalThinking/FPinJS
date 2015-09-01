/*
chapter 2:
*/

var _ = require('lodash'),
	existy = require('../chapter1/existy').existy;

function cat() {
	var head = _.first(arguments);
	if (existy(head))
		return head.concat.apply(head, _.rest(arguments));
	else
		return [];
}

exports.cat =  cat;
