/*
Trampoline: Exercise
*/

var assert = require('assert');

function repeat(operation, num) {
  // 스택 오버플로우가 발생하지 않도록 수정하라!
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

function trampoline(fn) {
  // trampoline을 구현하라!
  // 노트: 반환값을 필요 없음
}

var count = 0;
trampoline(repeat(function() { count++ }, 100000));
assert.equal(count, 100000);