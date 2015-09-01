/*
Chapter3: Currying
*/

var _ = require('lodash');

function curryN(fun) {
  var argsLength = fun.length;
  function curriedFun(pargs) {
    return function(arg) {
      var newPargs = [arg].concat(pargs);
      if (newPargs.length < argsLength) 
        return curriedFun(newPargs);
      else 
        return fun.apply(null, newPargs);
    };
  };
  return curriedFun([]);
}

function add(a, b, c) {
  return a + b + c;
}

var curryC = curryN(add)
var curryB = curryC(5)
var curryA = curryB(3)

console.log(curryA(1))
// => 9

console.log(curryA(2))
// => 10
