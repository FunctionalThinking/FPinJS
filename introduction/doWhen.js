var truthy = require('./truthy').truthy;

function doWhen(cond, action) {
    if(truthy(cond))
        return action();
    else
        return undefined;
}

exports.doWhen = doWhen;