var a = [1, 2, 3];
a[1] = 42;
a;
// console.log(a);
//=> [1, 42, 3]

Object.freeze(a);
a[1] = 108;
a;
// console.log(a);
//=> [1, 42, 3]

Object.isFrozen(a);
//=> true

var x = [{a: [1, 2, 3], b: 42}, {c: {d: []}}];
Object.freeze(x);
x[0] = "";
x;
// console.log(x);
//=> [{a: [1, 2, 3], b: 42}, {c: {d: []}}]

x[1]['c']['d'] = 100000;
x;
// console.log(x);
//=> [{a: [1, 2, 3], b: 42}, {c: {d: 100000}}]
