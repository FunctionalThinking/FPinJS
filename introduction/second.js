/*
Introducing Functional Javascript
*/

var nth = require('./nth').nth;

function second(a) {
	return nth(a, 1);
}

second(['a', 'b']);
//=> 'b'

second("fogus");
//=> 'o'

// second({});
//=> Error: Not supported on non-indexed type

exports.second = second;