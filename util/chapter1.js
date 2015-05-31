function fail(thing) {
	throw new Error(thing);
}

function existy(x) {
	return x != null;
}

function truthy(x) {
	return (x !== false) && existy(x);
}

function doWhen(cond, action) {
	if (truthy(cond))
		return action();
	else
		return undefined;
}

exports.fail = fail;
exports.existy = existy;
exports.doWhen = doWhen;
