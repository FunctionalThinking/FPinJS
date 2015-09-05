// ES6: tail call optimization

function factorial(n, acc = 1) {
    "use strict";
    if (n <= 1) return acc;
    return factorial(n - 1, n * acc);
}

// safe on arbitrary inputs in ES6
factorial(1000000);

