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
doSomething({});
// console.log(doSomething({critical: 9}));
// console.log(doSomething({}));

var lookup = defaults({critical: 9, normal: 100});
lookup({normal: 100}, 'critical');
lookup({}, 'normal');
// console.log(lookup({normal: 100}, 'critical'));
// console.log(lookup({}, 'normal'));