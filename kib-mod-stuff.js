// lesson-7 : module patterns
// a module can have various functions, etc and all of them can be made available when required somewhere else

var counter = function( arr ){
  return 'The provided object has [ '+ arr.length +' ] elements in it.';
};

var adder = function( a,b ){
  return `The sum ya hizi digits mbili ni, [ ${a} + ${b} = ${a+b} ].`;
};

module.exports.toa = function( a,b ){
  return `The subtraction ya hizi digits mbili ni, [ ${a} - ${b} = ${a-b} ].`;
};

var doubler = function( a ){
  return `The double of hii digit ni, [ ${a*a} ].`;
};

var pi2 = 3.142 * 2;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi2 = pi2;
/* :: another way of exporting shit

module.exports = {
  doubler: doubler 
};

*/
