var assert = require('assert');

function repeat(operation, num) {
  // 문제 해법은 여기에 작성
}

var count = 0;
repeat(function () {
    count++;
}, 100);
//=> count는 100

assert.equal(count, 100);