var _ = require('lodash');
var repeatedly = require('./iterateUntil').repeatedly;

function always(VALUE) {
	return function() {
		return VALUE;
	}
}

var f = always(function() {});
f() === f();
//=> true

var g = always(function() {});
f() === g();
//=> false

repeatedly(3, always("Odelay!"));
//=> ["Odelay!", "Odelay!", "Odelay!"]

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
