var _ = require('lodash');

function iterateUntil(fun, check, init) {
	var ret = [];
	var result = fun(init);

	while(check(result)) {
		ret.push(result);
		result = fun(result);
	}

	return ret;
}

iterateUntil(
	function(n) { return x + x; },
	function(n) { return n <= 1024; },
	1
	);
//=> [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

repeatedly(10, function(exp) { return Math.pow(2, exp+1); });
//=> [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

exports.repeatedly = repeatedly;
