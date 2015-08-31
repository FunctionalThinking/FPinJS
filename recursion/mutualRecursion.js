/*
chapter 6. recursion
*/

var _ = require('lodash')
    cat = require('../chapter2/cat').cat;

function evenSteven(n) {
    if (n === 0)
        return true;
    else
        return oddJohn(Math.abs(n) - 1);
}

function oddJohn(n) {
    if (n === 0)
        return false;
    else
        return evenSteven(Math.abs(n) - 1);
}

// console.log("1. evenSteven-oddJohn:");

// console.log(evenSteven(4));
//=> true

// console.log(oddJohn(11));
//=> true

function flat(array) {
    if (_.isArray(array))
        return cat.apply(cat, _.map(array, flat));
    else
        return [array];
}

// console.log("2. flat:");

// console.log(flat([1, 2], [3, 4]));
//=> [1, 2, 3, 4]

// console.log(flat([[1, 2], [3, 4, [5, 6, [[[7]]], 8]]]));
//=> [1, 2, 3, 4, 5, 6, 7, 8]