var _ = require('lodash'),
	existy = require('./chapter1').existy,
	fail = require('./chapter1').fail
	doWhen = require('./chapter1').doWhen;

function always(VALUE) {
	return function() {
		return VALUE;
	};
}

function repeatedly(times, fun) {
	return _.map(_.range(times), fun);
}

function invoker(NAME, METHOD) {
	return function(target) {
		if (!existy(target)) fail("Must provide a target");

		var targetMethod = target[NAME];
		var args = _.rest(arguments);

		return doWhen((existy(targetMethod) && METHOD === targetMethod), function() {
			return targetMethod.apply(target, args);
		});
	};
}

exports.always = always;
exports.repeatedly = repeatedly;
exports.invoker = invoker;
