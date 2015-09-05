/*
Higher-Order Functions
*/

var _ = require('lodash');

function repeat(times, VALUE) {
	return _.map(_.range(times), function() { return VALUE; });
}

repeat(4, "Major");
//=> ["Major", "Major", "Major", "Major"]