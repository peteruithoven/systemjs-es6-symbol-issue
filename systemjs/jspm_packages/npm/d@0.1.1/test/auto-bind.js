/* */ 
'use strict';
var d = require('../../d@0.1.1');
module.exports = function(t, a) {
  var o = Object.defineProperties({}, t({
    bar: d(function() {
      return this === o;
    }),
    bar2: d(function() {
      return this;
    })
  }));
  a.deep([(o.bar)(), (o.bar2)()], [true, o]);
};
