/*
Introducing Functional Javascript
*/

var existy = require('./existy').existy;

function truthy(x) { return (x !== false) && existy(x) };

truthy(false);
//=> false

truthy(undefined);
//=> false

truthy(0);
//=> true

truthy('');
//=> true

exports.truthy = truthy;
