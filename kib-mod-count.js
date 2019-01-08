// lesson-6 : modules and require()
// this is a sample modules
var counter = function( arr ){
  return 'The provided object has [ '+ arr.length +' ] elements in it.';
};

module.exports = counter;
