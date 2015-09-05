/*
Recursion
*/

var _ = require('lodash'),
    isEven = require('../scope/complement').isEven;

function andify() {
    var preds = _.toArray(arguments);
    return function() {
        var args = _.toArray(arguments);
        var everything = function(ps, truth) {
            if (_.isEmpty(ps))
                return truth;
            else // logical and operator (&&) - short-circuiting
                return _.every(args, _.first(ps)) && everything(_.rest(ps), truth);
        };
        return everything(preds, true);
    };
}

var evenNums = andify(_.isNumber, isEven);

evenNums(1, 2);
//=> false

evenNums(2, 4, 6, 8);
//=> true

evenNums(2, 4, 6, 8, 9);
//=> false
