/*
Recursion: Solution
*/

var assert = require('assert');

var tree = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
};

function getDependencies(mod, result) {
  result = result || [];
  var dependencies = mod && mod.dependencies || [];

  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  });

  return result.sort();
}

assert.deepEqual(getDependencies(tree), 
    [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]);