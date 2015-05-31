var _ = require('lodash'),
	construct = require('../util/chapter6').construct;

function merge() {
	return _.extend.apply(null, construct({}, arguments));
}
