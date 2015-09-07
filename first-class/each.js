var _ = require('lodash');

_.each(['wiskey', 'tango', 'foxtrot'], function(word) {
    console.log(word.charAt(0).toUpperCase() + word.substr(1));
});
// (console) Wiskey 
// (console) Tango
// (console) Foxtrot