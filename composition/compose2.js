/*
Function Bulding Functions
*/

var _ = require('lodash')

function compose(fn1, fn2) {
  return function() {
    return fn1(fn2.apply(null, arguments))
  }
}

function not(x) { return !x }
var isntString = compose(not, _.isString)

isntString(10);
//=> true
isntString("String");
//=> false
