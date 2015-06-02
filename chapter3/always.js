var repeatedly = require('./repeatedly').repeatedly;

function always(VALUE) {
	return function() {
		return VALUE;
	}
}

var f = always(function() {});
f() === f();
//=> true

var g = always(function() {});
f() === g();
//=> false

repeatedly(3, always("Odelay!"));
//=> ["Odelay!", "Odelay!", "Odelay!"]
