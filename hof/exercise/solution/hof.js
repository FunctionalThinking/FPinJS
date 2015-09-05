var assert = require('assert');

function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  return repeat(operation, --num);
}

var count = 0;
repeat(function () {
    count++;
}, 100);
//=> count는 100

assert.equal(count, 100);