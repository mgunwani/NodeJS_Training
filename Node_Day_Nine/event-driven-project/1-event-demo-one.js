
// const emitter = require('events').EventEmitter;
// var eventEmitter = emitter();

// Get the Reference of EventEmitter Class
const events = require('events');
// Create an Object of EventEmitter Class
var eventEmitter = new events.EventEmitter();

// Subscribe FirstEvent
eventEmitter.on('FirstEvent', function () {
    console.log('First Event Raised..');
})

// Subscribe SecondEvent
eventEmitter.addListener('SecondEvent', function () {
    console.log('Second Event Raised..');
})

// Subscribe ThirdEvent
eventEmitter.once('ThirdEvent', function (data) {
    console.log('Third Event Raised..' + data);
})

// Publish or Raise the Event
eventEmitter.emit('FirstEvent');
eventEmitter.emit('FirstEvent');
eventEmitter.emit('FirstEvent');
eventEmitter.emit('FirstEvent');

// Publish or Raise the Event
eventEmitter.emit('SecondEvent')
eventEmitter.emit('SecondEvent')
eventEmitter.emit('SecondEvent')
eventEmitter.emit('SecondEvent')

// Publish or Raise the Event
eventEmitter.emit('ThirdEvent', "Data sent to Third Event")
eventEmitter.emit('ThirdEvent', "Data sent to Third Event")
eventEmitter.emit('ThirdEvent', "Data sent to Third Event")
eventEmitter.emit('ThirdEvent', "Data sent to Third Event")