var existy = require('./existy').existy;

function truthy(x) { return (x !== false) && existy(x) };

console.log(truthy(false));
//=> false

console.log(truthy(undefined));
//=> false

console.log(truthy(0));
//=> true

console.log(truthy(''));
//=> true

exports.truthy = truthy;
