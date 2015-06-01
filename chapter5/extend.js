var _ = require('lodash');

var person = {fname: "Simon"};

_.extend(person, {lname: "Petrikov"}, {age: 28}, {age: 108});
//=> {age: 108, fname: "Simon", lname: "Petrikov"}

person;
// console.log(person);
//=> {age: 108, fname: "Simon", lname: "Petrikov"}
