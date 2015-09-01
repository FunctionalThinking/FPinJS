/*
Chapter3: Functiona Composition
*/

/*
function composeN() {
  return [].reduce.call(arguments, function(f, g) {
    return function() {
      return f(g.apply(null, arguments))
    }
  })
}
*/

var _ = require('lodash')

function composeN() {
  var fs = _.toArray(arguments).reverse()
  return function() {
    var result = fs[0].apply(null, arguments)
    for (var i=1; i < fs.length; ++i) {
      result = fs[i](result)
    }
    return result
  }
}


var partialN = require('./partialN')

function add(x, y) { return x + y }
function mul(x, y) { return x * y }
function div(x, y) { return x / y }

var add3Mul4 = composeN(partialN(mul, 4), partialN(add, 3))
var add3Mul4Div10 = composeN(partialN(div, 10), add3Mul4)

console.log(add3Mul4(2))
//=> 20
console.log(add3Mul4Div10(2))
//=> 0.5
