/*
Purity, immutability and policies for change
*/

var a = [1, 2, 3];
a[1] = 42;
a;
//=> [1, 42, 3]

Object.freeze(a);
a[1] = 108;
a;
//=> [1, 42, 3]

Object.isFrozen(a);
//=> true

var x = [{a: [1, 2, 3], b: 42}, {c: {d: []}}];
Object.freeze(x);
x[0] = "";
x;
//=> [{a: [1, 2, 3], b: 42}, {c: {d: []}}]

x[1]['c']['d'] = 100000;
x;
//=> [{a: [1, 2, 3], b: 42}, {c: {d: 100000}}]
