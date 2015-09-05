/*
Recursion
*/

var _ = require('lodash'),
    curry2 = require('../composition/curry2').curry2,
    second = require('../introduction/second').second;

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

groupFrom(influences);
//=>    {Lisp: [["Lisp", "Smalltalk"], ["Lisp, "Scheme"]],
//       Smalltalk: [["Smalltalk", "Self"]],
//       Scheme: [["Scheme", "JavaScript"], ["Scheme", "Lua"]],
//       Self: [["Self", "Lua"], ["Self", "JavaScript"]]}

groupTo(influences);
//=>    {Smalltalk: [["Lisp", "Smalltalk"]],
//       Scheme: [["Lisp", "Scheme"]],
//       Self: [["Smalltalk", "Self"]],
//       JavaScript: [["Scheme", "JavaScript"], ["Self", "JavaScript"]],
//       Lua: [["Scheme", "Lua"], ["Self", "Lua"]]}