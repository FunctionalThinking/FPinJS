var _ = require('lodash'),
	construct = require('../util/chapter5').construct;

function merge() {
	return _.extend.apply(null, construct({}, arguments));
}
