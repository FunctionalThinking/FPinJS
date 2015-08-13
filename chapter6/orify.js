/*
chapter 6: recursion
*/

var _ = require('lodash'),
    isEven = require('../util/chapter6').isEven
    isOdd = require('../util/chapter6').isOdd
    zero = require('../util/chapter6').zero;

function orify() {
    var preds = _.toArray(arguments);
    return function() {
        var args = _.toArray(arguments);
        var something = function(ps, truth) {
            if (_.isEmpty(ps))
                return truth;
            else // logical and operator (||) - short-circuiting
                return _.some(args, _.first(ps)) || something(_.rest(ps), truth);
        };
        return something(preds, false);
    };
}

var zroOrOdd = orify(isOdd, zero);

console.log(zroOrOdd());
//=> false

console.log(zroOrOdd(0, 2, 4, 6));
//=> true

console.log(zroOrOdd(2, 4, 6));
//=> false