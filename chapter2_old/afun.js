var _ = require('lodash');

aVariable = "Outer";

function aFun() {
	var aVariable = "Middle";
	return _.map([1, 2, 3], function(e) {
		var aVariable = "In";
		return [aVariable, e].join(' ');
	});
}

aFun();
console.log(aFun());
//=> ["In 1", "In 2", "In 3"];