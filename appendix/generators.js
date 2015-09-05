// ES6: generators
"use strict";

function* range(start, end, step) {
    while (start < end) {
        yield start;
        start += step;
    }
}

var gen = range(0, 10, 2);

gen.next();
//=> {value: 0, done: false}
gen.next();
//=> {value: 2, done: false}

for (let i of range(0, 10, 2)) {
    console.log(i);
    //=> 0, 2, 4, 6, 8
}

let fibonacci = {
    *[Symbol.iterator]() {
        let pre = 0, cur = 1;
        for (;;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
}

