var assert = require('assert');

function add3(one, two, three) {
  return one + two + three;
}

function curryN(fn, n) {
  n = n || fn.length;

  return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}

var curryC = curryN(add3);
var curryB = curryC(1);
var curryA = curryB(2);

assert.equal(curryA(3), 6);
assert.equal(curryA(10), 13);
assert.equal(curryN(add3)(1)(2)(3), 6);
