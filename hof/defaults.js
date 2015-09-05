/*
Higher-Order Functions
*/

var _ = require('lodash'),
	fnull = require('./fnull').fnull;

function defaults(d) {
	return function(o, k) {
		var val = fnull(_.identity, d[k]);
		return o && val(o[k]);
	};
}
function doSomething(config) {
	var lookup = defaults({critical: 108});
	return lookup(config, 'critical');
}

doSomething({critical: 9});
//=> 9

doSomething({});
//=> 108

var lookup = defaults({critical: 9, normal: 100});
lookup({normal: 100}, 'critical');
//=> 9

lookup({}, 'normal');
//=> 100

exports.defaults = defaults;