function whatWasTheLocal() {
	var CAPTURED = "Oh hai";

	return function() {
		return "The local was: " + CAPTURED;
	};
}

var reportLocal = whatWasTheLocal();

reportLocal();
// console.log(reportLocal());
//=> "The local was: Oh hai"