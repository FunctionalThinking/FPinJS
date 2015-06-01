/*
Chapter3: Partial Application
*/

var _ = require('underscore')

function partial2(fn, a, b) {
  return function() {
    var args = [a, b].concat(_.toArray(arguments))
    return fn.apply(fn, args)
  }
}

var curry3 = require('./curry3');

var blueGreenish = partial2(curry3.rgbToHexStr, 255, 200);

blueGreenish(0);
//=> '#00c8ff'

