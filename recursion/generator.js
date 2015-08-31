/*
chapter 6: recursion
*/

var _ = require('lodash');

function generator(seed, current, step) {
    return {
        head: current(seed),
        tail: function() {
            console.log("forced");
            return generator(step(seed), current, step);
        }
    };
}

function genHead(gen) { return gen.head }
function genTail(gen) { return gen.tail() }

var ints = generator(0, _.identity, function (n) { return n + 1 });

// console.log(genHead(ints));
//=> 0

// console.log(genTail(ints));
//=> (console) forced
//=> {head: 1, tail: [Function]}

// console.log(genTail(genTail(ints)));
//=> (console) forced
//=> (console) forced
//=> {head: 2, tail: [Function]}

exports.generator = generator;
exports.ints = ints;
exports.genHead = genHead;
exports.genTail = genTail;