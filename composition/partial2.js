/*
Function Bulding Functions
*/

var _ = require('lodash')

function partial2(fn, a, b) {
  return function() {
    var args = [a, b].concat(_.toArray(arguments))
    return fn.apply(fn, args)
  }
}

var rgbToHexStr = require('./curry3').rgbToHexStr;

var blueGreenish = partial2(rgbToHexStr, 255, 200);

blueGreenish(0);
//=> '#00c8ff'

