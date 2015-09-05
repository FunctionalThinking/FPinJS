/*
Introducing Functional Javascript
*/

var _ = require('lodash'),
	truthy = require('./truthy').truthy,
	existy = require('./existy').existy;

function doWhen(cond, action) {
	if (truthy(cond))
		return action();
	else
		return undefined;
}

function executeIfHasField(target, name) {
	return doWhen(existy(target[name]), function() {
		var result = _.result(target, name);
		console.log(['The result is', result].join(' '));
		return result;
	});
}

executeIfHasField([1, 2, 3], 'reverse');
// (console) The result is 3, 2, 1
//=> [3, 2, 1]

executeIfHasField({foo: 42}, 'foo');
// (console) The result is 42
//=> 42

executeIfHasField([1, 2, 3], 'notHere');
//=> undefined
