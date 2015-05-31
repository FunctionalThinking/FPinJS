var _ = require('lodash'),
	existy = require('./chapter1').existy,
	construct = require('./chapter2').construct,
	invoker = require('./chapter4').invoker;

function dispatch() {
	var funs = _.toArray(arguments);
	var size = funs.length;

	return function(target) {
		var ret = undefined;
		var args = _.rest(arguments);

		for (var funIndex = 0; funIndex < size; funIndex++) {
			var fun = funs[funIndex];
			ret = fun.apply(fun, construct(target, args));

			if (existy(ret)) return ret;
		}

		return ret;
	};
}

var str = dispatch(
	invoker('toString', Array.prototype.toString),
	invoker('toString', String.prototype.toString)
);

exports.str = str;
