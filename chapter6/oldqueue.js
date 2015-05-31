var _ = require('lodash'),
	cat = require('../util/chapter6').cat;

function Queue(elems) {
	this._q = elems;
}

Queue.prototype = {
	enqueue: function(thing) {
		return new Queue(cat(this._q, [thing]));
	}
};

var seed = [1, 2, 3];
var q = new Queue(seed);
q;
// console.log(q);
//=> {_q: [1, 2, 3]}

var q2 = q.enqueue(108);
// console.log(q2);
//=> {_q: [1, 2, 3, 108]}

q;
// console.log(q);
//=> {_q: [1, 2, 3]}

seed.push(1000);
q;
// console.log(q);
//=> {_q: [1, 2, 3, 10000]}
