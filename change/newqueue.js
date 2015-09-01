var _ = require('lodash'),
	invoker = require('../util/chapter5').invoker,
	SaferQueue = require('./saferqueue').SaferQueue;

// problem: forgot new
var q = SaferQueue([1, 2, 3]);
q.enqueue(32);
//=> TypeError: Cannot; call method 'enqueue' of undefined

// solution: constructor function
function queue() {
	return new SaferQueue(_.toArray(arguments))
}

var q = queue(1, 2, 3);
var enqueue = invoker('enqueue', SaferQueue.prototype.enqueue);
enqueue(q, 42);
// console.log(enqueue(q, 42));
//=> {_q: [1, 2, 3, 42]}
