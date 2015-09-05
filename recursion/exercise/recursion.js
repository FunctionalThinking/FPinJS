/*
Recursion: Exercise
*/

var assert = require('assert');

var tree = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
};

function getDependencies(tree) {
  // 문제 해법은 여기에 작성
  // 노트: 함수 인자는 자유롭게 추가 가능
}

assert.deepEqual(getDependencies(tree), 
    [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]);