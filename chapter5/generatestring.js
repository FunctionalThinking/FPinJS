var _ = require('lodash'),
	rand = require('./rand').rand,
	repeatedly = require('../util/chapter5').repeatedly;

function generateRandomCharacter() {
	return rand(26).toString(36);
}

function generateString(charGen, len) {
	return repeatedly(len, charGen).join('');
}

var result1 = generateString(generateRandomCharacter, 20);

var composedRandomString = _.partial(generateString, generateRandomCharacter);
var result2 = composedRandomString(10);

// console.log(result1);
// console.log(result2);

exports.generateRandomCharacter = generateRandomCharacter;
exports.generateString = generateString;
