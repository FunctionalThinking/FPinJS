/*
Introducing Functional Javascript
*/

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

nth(letters, 1);
//=> 'b'

nth("abc", 0);
//=> 'a'

// nth({}, 2);
// Error: Not supported on non-indexed type

// nth(letters, 4000);
// Error: Index value is out of bounds

exports.nth = nth;