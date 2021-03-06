/*
Recursion
*/

var _ = require('lodash'),
    trampoline = require('./trampoline').trampoline,
    generator = require('./generator').generator,
    ints = require('./generator').ints,
    genHead = require('./generator').genHead,
    genTail = require('./generator').genTail,
    cat = require('../first-class/cat').cat;

function genTake(n, gen) {
    var doTake = function(x, g, ret) {
        if (x === 0)
            return ret;
        else
            return _.partial(doTake, x-1, genTail(g), cat(ret, genHead(g)));
    };
    return trampoline(doTake, n, gen, []);
}

genTake(10, ints);
//=> (console) forced * 10
//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

genTake(100, ints);
//=> (console) forced * 100
//=> [0, 1, 2, 3, ..., 99]

genTake(1000, ints);
//=> (console) forced * 1000
//=> Array[1000]

genTake(10000, ints);
//=> (console) forced * 10000
//=> Array[10000]

genTake(100000, ints);
//=> (console) forced * 100000
//=> Array[100000]

genTake(1000000, ints);
// it takes many hours to complete computation
//=> (console) forced * 1000000
//=> Array[1000000]