var assert = require('assert');

// function doubleAll(numbers) {
//   var result = []
//   for (var i = 0; i < numbers.length; i++) {
//     result.push(numbers[i] * 2)
//   }
//   return result
// }

function doubleAll(numbers) {
  return numbers.map(function double(num) {
    return num * 2;
  });
}

assert.deepEqual(doubleAll([1]), [2]);
assert.deepEqual(doubleAll([1, 2, 4]), [2, 4, 8]);
