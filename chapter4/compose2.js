/*
Chapter3: Function Composition
*/

var _ = require('underscore')

function compose(fn1, fn2) {
  return function() {
    return fn1(fn2.apply(null, arguments))
  }
}

function not(x) { return !x }
var isntString = compose(not, _.isString)

console.log(isntString(10))
//=> true
console.log(isntString("String"))
//=> false
