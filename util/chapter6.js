var isEven = require('./chapter3').isEven,
    isOdd = require('./chapter3').isOdd;

function zero(n) { return n === 0; };

exports.isEven = isEven;
exports.isOdd = isOdd;
exports.zero = zero;
