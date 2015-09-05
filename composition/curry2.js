/*
Function Bulding Functions
*/

var _ = require('lodash')

function curry2(fn) {
  return function(b) {
    return function(a) {
      return fn(a, b)
    }
  }
}

function div(n, d) {
    return n / d;
}

var div10 = curry2(div)(10);
div10(50);
//=> 5

var plays = [
{artist: "Burial",    track: "Archangel"},
{artist: "Ben Frost", track: "Stomp"},
{artist: "Ben Frost", track: "Stomp"},
{artist: "Burial",    track: "Archangel"}
]


var countResult = _.countBy(plays, function(song) {
  return [song.artist, song.track].join('-')
})


countResult;
// => {"Ben Frost - Stomp": 2,
//     "Burial - Archangel": 2}


function songToString(song) {
  return [song.artist, song.track].join('-');
}

var songCount = curry2(_.countBy)(songToString);
var countResult = songCount(plays);

countResult;
// => {"Ben Frost - Stomp": 2, 
//     "Burial - Archangel": 2}

exports.curry2 = curry2;
exports.div = div;