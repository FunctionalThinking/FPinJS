/*
chapter 6: recursion
*/

var _ = require('lodash'),
	existy = require('../chapter1/existy').existy;

function deepClone(obj) {
	if (!existy(obj) || !_.isObject(obj))
		return obj;

	var temp = new obj.constructor();
	for (var key in obj) {
		if (obj.hasOwnProperty(key))
			temp[key] = deepClone(obj[key]);
	}

	return temp;
}

var x = [{a: [1, 2, 3], b: 42, {c: {d: []}}}];

var y = deepClone(x);

console.log(_.isEqual(x, y));
//=> true

y[1]['c']['d'] = 42;

console.log(_.isEqual(x, y));
//=> false
