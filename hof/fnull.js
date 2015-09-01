var _ = require('lodash');

function existy(e) {
	return e != null;
}

var nums = [1, 2, 3, null, 5];
_.reduce(nums, function(total, n) { return total * n; });
// console.log(_.reduce(nums, function(total, n) { return total * n; }));

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

_.reduce(nums, safemult)
// console.log(_.reduce(nums, safemult));

exports.fnull = fnull;