var _ = require('lodash'),
	assert = require('assert'),
	repeatedly = require('../../util/chapter6').repeatedly,
	generateRandomCharacter = require('../generatestring').generateRandomCharacter;

describe("generateRandomCharacter", function() {
	var result = repeatedly(10000, generateRandomCharacter);

	it("should return only strings of length 1", function() {
		expect(_.every(result, _.isString)).toBeTruthy();
		expect(_.every(result, function(s) { return s.length === 1 })).toBeTruthy();
	});

	it("should return a string of only lowercase ASCII letters or digits", function() {
		expect(_.every(result, function(s) {
			return /[a-z0-9]/.test(s) })).toBeTruthy();
		expect(_.any(result, function(s) { return /[A-Z]/.test(s) })).toBeFalsy();
	});
})
