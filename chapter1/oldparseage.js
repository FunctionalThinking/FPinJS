var _ = require('lodash');

function parseAge(age) {
	if (!_.isString(age)) throw new Error("Expecting a string");
	var a;

	console.log("Attempting to parse an age");
	a = parseInt(age, 10);

	if (_.isNaN(a)) {
		console.log(["Could not parse age:", age].join(' '));
		a = 0;
	}

	return a;
}

parseAge("42");
// (console) Attempting to parse an age
//=> 42

parseAge(42);
//=> Error: Expecting a string

parseAge("frob");
// (console) Attempting to parse an age
// (console) Could not parse age: frob
//=> 0
