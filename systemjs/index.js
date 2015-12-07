//import 'es6-symbol'; // import is enough to trigger issue

import Symbol from 'es6-symbol'; 

var symbol = Symbol('my symbol');
console.log('symbol: ',symbol);

window.symbol = symbol;
