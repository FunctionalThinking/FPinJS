var _ = require('lodash'),
	fail = require('./newparseage').fail;

var letters = ['a', 'b', 'c'];

function isIndexed(data) {
	return _.isArray(data) || _.isString(data);
}

function nth(a, index) {
	if (!_.isNumber(index)) fail("Expected a number as the index");
	if (!isIndexed(a)) fail("Not supported on non-indexed type");
	if ((index < 0) || (index > a.length - 1))
		fail("Index value is out of bounds");

	return a[index];
}

// console.log(nth(letters, 1));
//=> 'b'

// console.log(nth("abc", 0));
//=> 'a'

// console.log(nth({}, 2));
// Error: Not supported on non-indexed type

// console.log(nth(letters, 4000));
// Error: Index value is out of bounds

exports.nth = nth;