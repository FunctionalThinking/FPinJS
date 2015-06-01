/*
Chapter3: Currying
*/

var _ = require('underscore')

function curry2(fn) {
  return function(b) {
    return function(a) {
      return fn(a, b)
    }
  }
}

var plays = [
{artist: "Burial",    track: "Archangel"},
{artist: "Ben Frost", track: "Stomp"},
{artist: "Ben Frost", track: "Stomp"},
{artist: "Burial",    track: "Archangel"}
]

/*
var countResult = _.countBy(plays, function(song) {
  return [song.artist, song.track].join('-')
})


console.log(countResult)
// => {"Ben Frost - Stomp": 2,
//     "Burial - Archangel": 2}
*/

function songToString(song) {
  return [song.artist, song.track].join('-')
}

var songCount = curry2(_.countBy)(songToString)
var countResult = songCount(plays)

console.log(countResult)
// => {"Ben Frost - Stomp": 2, 
//     "Burial - Archangel": 2}
