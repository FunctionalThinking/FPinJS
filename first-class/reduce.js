/*
first-class functions and applicative programming
*/

var _ = require('lodash');

Array.prototype.reduce = function(comb, init) {
    var counter, acc;

    if (this.length === 0) {
        return this;
    } else {
        if (arguments.length === 1) {
            counter = 1;
            acc = this[0];
        } else if (arguments.length >= 2) {
            counter = 0;
            acc = init;
        } else {
            throw "Invalid arguments.";
        }

        while(counter < this.length) {
            acc = comb(acc, this[counter])
            counter++;
        }

        return [acc];
    }
};


[1, 2, 3].reduce(function(acc, curr) { return acc + curr }, 10)
//=> 16

// [1, 2, 3].reduce(function(acc, curr) { return acc + curr });
//=> 6

var boxarts = [
    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

boxarts.reduce(function(acc, curr) {
    if (acc.width * acc.height > curr.width * curr.height)
        return acc;
    else
        return curr;
  }).
  map(function(boxart) { return boxart.url });
//=> [ 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg' ]