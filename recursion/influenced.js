/*
chapter 6: recursion
*/

var _ = require('lodash'),
    curry2 = require('../chapter4/curry2').curry2,
    second = require('../chapter1/second');

var influences = [
    ['Lisp', 'Smalltalk'],
    ['Lisp', 'Scheme'],
    ['Smalltalk', 'Self'],
    ['Scheme', 'JavaScript'],
    ['Scheme', 'Lua'],
    ['Self', 'Lua'],
    ['Self', 'JavaScript']];

var groupFrom   = curry2(_.groupBy)(_.first);
var groupTo     = curry2(_.groupBy)(second);

// console.log(groupFrom(influences));
//=>    {Lisp: [["Lisp", "Smalltalk"], ["Lisp, "Scheme"]],
//       Smalltalk: [["Smalltalk", "Self"]],
//       Scheme: [["Scheme", "JavaScript"], ["Scheme", "Lua"]],
//       Self: [["Self", "Lua"], ["Self", "JavaScript"]]}

// console.log(groupTo(influences));
//=>    {Smalltalk: [["Lisp", "Smalltalk"]],
//       Scheme: [["Lisp", "Scheme"]],
//       Self: [["Smalltalk", "Self"]],
//       JavaScript: [["Scheme", "JavaScript"], ["Self", "JavaScript"]],
//       Lua: [["Scheme", "Lua"], ["Self", "Lua"]]}