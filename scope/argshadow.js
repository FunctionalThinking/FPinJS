/*
Variable Scope and Closures
*/

var shadowed = 0;

function argShadow(shadowed) {
	return ["Value is", shadowed].join(' ');
}

argShadow(108);
//=> "Value is 108";

argShadow();
//=> "Value is "