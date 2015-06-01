function existy(x) { return x != null };

existy(null);
//=> false

existy(undefined);
//=> false

existy({}.notHere);
//=> false

existy((function() {})());
//=> false

exports.existy = existy;
