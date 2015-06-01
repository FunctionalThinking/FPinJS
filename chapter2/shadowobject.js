function shadowObject(OBJ) {
	return function() {
		return OBJ;
	};
}

var o = {a: 42};
var showO = shadowObject(o);

showO();
//=> {a: 42}

o.newField = 108;
showO();
//=> {a: 42, newFIeld: 108};