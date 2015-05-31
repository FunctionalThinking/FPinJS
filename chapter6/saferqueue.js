var _ = require('lodash'),
	cat = require('../util/chapter6').cat,
	str = require('../util/chapter6').str;

var SaferQueue = function(elems) {
	this._q = _.clone(elems);
}

SaferQueue.prototype = {
	enqueue: function(thing) {
		return new SaferQueue(cat(this._q, [thing]));
	}
};

var seed = [1, 2, 3];
var q = new SaferQueue(seed);
var q2 = q.enqueue(36);
// console.log(q2);
//=> {_q: [1, 2, 3, 36]}

seed.push(1000);
q;
// console.log(q);
//=> {_q: [1, 2, 3]}

q._q.push(-1111);
q;
// console.log(q);
//=> {_q: [1, 2, 3, -1111]}

// problem: modify field _q directly
SaferQueue.prototype.enqueue = str;
q2.enqueue(42);
// console.log(q2.enqueue(42));
//=> 1764

exports.SaferQueue = SaferQueue;
