const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('event', function(){
    console.log("message called")
})
myEmitter.emit("event")