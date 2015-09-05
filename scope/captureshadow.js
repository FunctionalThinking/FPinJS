/*
Variable Scope and Closures
*/

function captureShadow(SHADOWED) {
	return function(SHADOWED) {
		return SHADOWED + 1;
	};
}

var closureShadow = captureShadow(108);

closureShadow(2);
//=> 3