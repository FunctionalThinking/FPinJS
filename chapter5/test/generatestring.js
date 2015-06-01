var generateString = require('../generatestring').generateString,
	always = require('../../util/chapter5').always;

describe("generateString", function() {
	var result = generateString(always("a"), 10);

	it("should return a string of a specific length", function() {
		expect(result.constructor).toBe(String);
		expect(result.length).toBe(10);
	});

	it("should return a string congruent with its char generator", function() {
		expect(result).toEqual("aaaaaaaaaa");
	})
})
