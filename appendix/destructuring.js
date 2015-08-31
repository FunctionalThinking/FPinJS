// ES6: destructuring
"use strict";

function getASTNode() {
    return {
        op: function() { console.log("op"); },
        lhs: {
            op: function() { console.log("lhs-op"); }
        },
        rhs: {}
    };
}

// list matching
var [a, , b] = [1, 2, 3];

// object matching
var {op: a, lhs: {op: b}, rhs: c} = getASTNode();
var {op, lhs, rhs} = getASTNode();

// can be used in parameter position
function g({name: x}) {
    console.log(x);
}

g({name: 5});

// fail-soft destructuring
var [a] = [];
a === undefined;

var [a = 1] = [];
a === 1;