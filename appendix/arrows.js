// ES6: arrows
"use strict";

// expression bodies
var evens = [2, 4, 6, 8, 10],
    odds  = evens.map(v => v + 1),
    nums  = evens.map((v, i) => v + i),
    pairs = evens.map(v => ({ even: v, odd: v+1})),
    fives = [];

// statement body
nums.forEach(v => {
    if (v % 5 == 0)
        fives.push(v);
});

//Lexical this
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p = new Person();