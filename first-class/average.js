/*
first-class functions and applicative programming
*/

var _ = require('lodash');

function average(array) {
    var sum = _.reduce(array, function (a, b) { return a + b; });
    return sum / _.size(array);
}

exports.average = average;