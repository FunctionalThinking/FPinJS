/*
Variable Scope and Closures
*/

var _ = require('lodash');

function plucker(FIELD) {
	return function(obj) {
		return (obj && obj[FIELD]);
	};
}

var best = {title: "Infinite Jest", author: "DFW"};

var getTitle = plucker('title');

getTitle(best);
//=> "Infinite Jest";

var books = [{title: "Chthon"}, {stars: 5}, {title: "Botchan"}];

var third = plucker(2);

third(books);
//=> {title: "Botchan"}

_.filter(books, getTitle);
//=> [{title: "Chthon"}, {title: "Botchan"}]