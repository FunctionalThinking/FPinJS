var assert = require('assert');

// * polyfill starts here *

Array.prototype.concatAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        results.push.apply(results, subArray);
    });
    return results;
};

// * polyfill ends here *

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
    return this.
        map(function(item) {
            return projectionFunctionThatReturnsArray(item);
        }).
        // apply the concatAll function to flatten the two-dimensional array
        concatAll();
};

var spanishFrenchEnglishWords = [
    ["cero","rien","zero"], 
    ["uno","un","one"], 
    ["dos","deux","two"]];

var allWords = [0,1,2].
    concatMap(function(index) {
        return spanishFrenchEnglishWords[index];
    });
//=> ["cero","rien","zero","uno","un","one","dos","deux","two"])