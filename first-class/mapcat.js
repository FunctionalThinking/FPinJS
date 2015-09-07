var _ = require('lodash'),
    cat = require('./cat').cat,
    construct = require('./construct').construct;

function mapcat(fun, coll) {
    return cat.apply(null, _.map(coll, fun)); 
}

mapcat(function(e) {
    return construct(e, [","]);
}, [1, 2, 3]);
//=> [1, ",", 2, ",", 3, ","]