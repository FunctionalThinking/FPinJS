/*
chapter 6: recursion
*/

var _ = require('lodash'),
	postDepth = require('./postDepth').postDepth;

var influences = [
	['Lisp', 'Smalltalk'],
	['Lisp', 'Scheme'],
	['Smalltalk', 'Self'],
	['Scheme', 'JavaScript'],
	['Scheme', 'Lua'],
	['Self', 'Lua'],
	['Self', 'JavaScript']];

function influencesWithStrategy(strategy, lang, graph) {
	var results = [];

	strategy(function(x) {
		if (_.isArray(x) && _.first(x) === lang)
			results.push(second(x));
		return x;
	}, graph);

	return results;
}

influencesWithStrategy(postDepth, "Lisp", influences);
