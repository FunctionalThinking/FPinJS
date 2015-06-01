/*
Chapter3: Partial Application
*/

var _ = require('underscore')

function partialN(fn) {
  var pargs = _.rest(arguments)
  return function() {
    var args = pargs.concat(_.toArray(arguments))
    return fn.apply(fn, args);
  }
}

function div(a, b) {
  return a / b
}

var div10By2 = partialN(div, 10, 2)
console.log(div10By2())
//=> 5

var curry3 = require('./curry3');

var blueGreenish = partialN(curry3.rgbToHexStr, 255, 200);
blueGreenish(0);
//=> '#00c8ff'


module.exports = partialN;
