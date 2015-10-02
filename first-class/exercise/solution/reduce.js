var assert = require('assert');

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWords(arr) {
    return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1; // increment or initialize to 1
        return countMap;
    }, {}) // second argument to reduce initialises countMap to {}
}

assert.deepEqual(countWords(inputWords), 
    { 'Apple': 2, 'Banana': 1, 'Durian': 3 });