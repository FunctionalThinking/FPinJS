var nth = require('./nth').nth;

function second(a) {
	return nth(a, 1);
}

// console.log(second(['a', 'b']));
//=> 'b'

// console.log(second("fogus"));
//=> 'o'

// console.log(second({}));
//=> Error: Not supported on non-indexed type

module.exports = second;