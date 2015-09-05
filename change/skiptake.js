/*
Purity, immutability and policies for change
*/

var _ = require('lodash');

function skipTake(n, coll) {
	var ret = [];
	var sz = _.size(coll);

	for (var index = 0; index < sz; index += n) {
		ret.push(coll[index]);
	}

	return ret;
}

skipTake(2, [1, 2, 3, 4]);
//=> [1, 3]

skipTake(3, _.range(20));
//=> [0, 3, 6, 9, 12. 15, 18]
