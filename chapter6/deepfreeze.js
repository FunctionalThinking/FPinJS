var _ = require('lodash');

function deepFreeze(obj) {
	if (!Object.isFrozen(obj))
		Object.freeze(obj);

	for (var key in obj) {
		if (!obj.hasOwnProperty(key) || !_.isObject(obj[key]))
			continue;

		deepFreeze(obj[key]);
	}
}


var x = [{a: [1, 2, 3], b: 42}, {c: {d: []}}];
deepFreeze(x);

x[0] = null;
x;
//=> [{a: [1, 2, 3], b:42}, {c: {d: []}}];
// console.log(x);

x[1]['c']['d'] = 42;
x;
//=> [{a: [1, 2, 3], b:42}, {c: {d: []}}];
// console.log(x);
