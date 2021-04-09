/*Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
To include the built-in Events module use the require() method. In addition, all event properties and methods
are an instance of an EventEmitter object. To be able to access these properties and methods
 create an EventEmitter object:*/
var events = require('events');
var EventEmitter = new events.EventEmitter();

var myEventHandler = function(){
  console.log('I hear a scream!');
}

EventEmitter.on('scream', myEventHandler);

EventEmitter.emit('scream');
