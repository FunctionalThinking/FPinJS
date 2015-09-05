/*
Function Bulding Functions
*/

function curry3(fun) {
  return function (c) {
    return function (b) {
      return function (a) {
        return fun(a, b, c);
      };
    };
  };
}

function toHex(n) {
  var hex = n.toString(16);
  return (hex.length < 2) ? [0, hex].join('') : hex;
}


function rgbToHexStr(r, g, b) {
  return ['#', toHex(r), toHex(g), toHex(b)].join('');
}

var blueGreenish = curry3(rgbToHexStr)(255)(200);

blueGreenish(0);
//=> '#00c8ff'

exports.toHex = toHex;
exports.rgbToHexStr = rgbToHexStr;
exports.curry3 = curry3;
