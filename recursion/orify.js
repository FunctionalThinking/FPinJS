/*
Recursion
*/

var _ = require('lodash'),
    isEven = require('../scope/complement').isEven,
    isOdd = require('../scope/complement').isOdd;

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

function zero(n) { return n === 0; };

var zroOrOdd = orify(isOdd, zero);

zroOrOdd();
//=> false

zroOrOdd(0, 2, 4, 6);
//=> true

zroOrOdd(2, 4, 6);
//=> false
