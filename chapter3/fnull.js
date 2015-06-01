var _ = require('lodash');

function existy(e) {
	return e != null;
}

var nums = [1, 2, 3, null, 5];
console.log(_.reduce(nums, function(total, n) { return total * n; }));

function fnull(fun) {
	var defaults = _.rest(arguments);

	return function() {
		var args = _.map(arguments, function(e, i) {
			return existy(e) ? e : defaults[i];
		});
		return fun.apply(null, args);
	};
}

var safemult = fnull(function(total, n) { return total * n; }, 1, 1);

console.log(_.reduce(nums, safemult));

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

console.log(doSomething({critical: 9}));
console.log(doSomething({}));

var lookup = defaults({critical: 9, normal: 100});
console.log(lookup({normal: 100}, 'critical'));
console.log(lookup({}, 'normal'));
