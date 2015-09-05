/*
Trampoline: Solution
*/

var _ = require('lodash'),
    assert = require('assert');

function repeat(operation, num) {
  return function() {
    if (num <= 0) return
  operation()
  return repeat(operation, --num)
  }
}

function trampoline(fn) {
  while (_.isFunction(fn)) {
    fn = fn();
  }
}

var count = 0;
trampoline(repeat(function() { count++ }, 100000));
assert.equal(count, 100000);