// lesson-8 : event emitter
var events = require('events');
var util = require('util');

var Person = function(jina){
  this.jina = jina;
};

var breeze = new Person('breeze'), lily = new Person('lily'), fantasia = new Person('fantasia');
var watu = [ breeze, lily, fantasia ];

util.inherits( Person, events.EventEmitter );

watu.forEach( function(mtu){
  mtu.on( 'speak', function(msg){
    console.log(mtu.jina +', amenena :: '+msg);
  } );
} );

breeze.emit( 'speak', 'leo ni maajab tu na witness' );
lily.emit( 'speak', 'tebu elezea kiasi juu ya hiyo' );
