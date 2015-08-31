// ES6: extended parameter handling
"use strict";

// default paramter values
function defaultParameter(x, y=12) {
    return x + y;
}

defaultParameter(3) === 15;

// rest paramter
function restParementer(x, ...y) {
    return x * y.length;
}

restParementer(3, "hello", true) === 6;

// spread operator
function spreadOperator(x, y, z) {
    return x + y + z;
}

spreadOperator(...[1, 2, 3]) === 6;

