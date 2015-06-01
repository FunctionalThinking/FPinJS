var _ = require('lodash'),
	existy = require('./chapter1').existy;

function cat() {
	var head = _.first(arguments);
	if (existy(head))
		return head.concat.apply(head, _.rest(arguments));
	else
		return [];
}

function construct(head, tail) {
	return cat([head], _.toArray(tail));
}

exports.cat = cat;
exports.construct = construct;
