/*
chapter 6: recursion
*/

var _ = require('lodash'),
    isEven = require('../util/chapter3').isEven;

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

console.log(evenNums(1, 2));
//=> false

console.log(evenNums(2, 4, 6, 8));
//=> true

console.log(evenNums(2, 4, 6, 8, 9));
//=> false
