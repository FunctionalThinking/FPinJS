var assert = require('assert');

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWords(inputWords) {
  // 해법은 여기에 작성
}

assert.deepEqual(countWords(inputWords), 
    { 'Apple': 2, 'Banana': 1, 'Durian': 3 });