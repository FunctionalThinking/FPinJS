/*
Higher-Order Functions
*/

var _ = require('lodash');

function repeatedly(times, fun) {
	return _.map(_.range(times), fun);
}

repeatedly(3, function() {
	return Math.floor((Math.random() * 10) + 1);
});
//=> [1, 3, 8]

repeatedly(3, function() { return "Odelay!"; });
//=> ["Odelay!", "Odelay!", "Odelay!"]

repeatedly(3, function(n) {
	var id = 'id' + n;
	// $('body').append($("<p>Odelay!</p>").attr('id', id));
	return id;
});
// Page now has three odelays
//=> ["id0", "id1", "id2"]

exports.repeatedly = repeatedly;