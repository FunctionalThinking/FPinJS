var _ = require('lodash');

function repeat(times, VALUE) {
	return _.map(_.range(times), function() { return VALUE; });
}

repeat(4, "Major");
//=> ["Major", "Major", "Major", "Major"]

function repeatedly(times, fun) {
	return _.map(_.range(times), fun);
}

repeatedly(3, function() {
	return Math.floor((Math.random() * 10) + 1);
});
//=> [1, 3, 8]

repeatedly(3, function() { return "Odelay!"; });
//=> ["Odelay!", "Odelay!", "Odelay!"]

repeatedly(3, function(n) {
	var id = 'id' + n;
	$('body').append($("<p>Odelay!</p>").attr('id', id));
	return id;
});
// Page now has three odelays
//=> ["id0", "id1", "id2"]


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
