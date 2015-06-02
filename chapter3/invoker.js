var _ = require('lodash'),
	existy = require('./util/chapter1').existy;

function invoker(NAME, METHOD) {
	return function(target) {
		if (!existy(target)) fail("");
		var targetMethod = target[NAME];
		var args = _.rest(arguments);

		return doWhen((existy(targetMethod) && METHOD === targetMethod), function() {
			return targetMethod.apply(target, args);
		});
	};
}

var rev = invoker('reverse', Array.prototype.reverse);

_.map([[1, 2, 3]], rev);
//=> [[3, 2, 1]]

exports.always = always;
