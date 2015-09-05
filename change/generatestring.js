/*
Purity, immutability and policies for change
*/

var _ = require('lodash'),
	rand = require('./rand').rand,
	repeatedly = require('../hof/repeatedly').repeatedly;

function generateRandomCharacter() {
	return rand(26).toString(36);
}

function generateString(charGen, len) {
	return repeatedly(len, charGen).join('');
}

generateString(generateRandomCharacter, 20);
//=> "21hfjo45n2nfnpbf7m7e"

var composedRandomString = _.partial(generateString, generateRandomCharacter);
composedRandomString(10);
//=> "j18obij1jc"

exports.generateRandomCharacter = generateRandomCharacter;
exports.generateString = generateString;
