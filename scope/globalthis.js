var _ = require('lodash');

function globalThis() { return this; }

globalThis();
//=> Window 같은 어떤 전역 객체

globalThis.call('barnabas');
//=> 'barnabas'

globalThis.apply('orsulak', [])
//=> 'orsulak'

var nopeThis = _.bind(globalThis, 'nope');

nopeThis.call('wat');
//=> 'nope'

aGlobalVariable = 'livin la vida grobal';

_.map(_.range(2), function() { return aGlobalVariable; });
//=> ['livin la vida grobal', 'livin la vida grobal']