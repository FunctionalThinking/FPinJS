/*
chapter 1:
*/
function existy(x) { return x != null };

// console.log(existy(null));
//=> false

// console.log(existy(undefined));
//=> false

// console.log(existy({}.notHere));
//=> false

// console.log(existy((function() {})()));
//=> false

exports.existy = existy;
