const EventEmitter = require("events");
const uuid = require("uuid");
// create class
// class MyEmitter extends EventEmitter{}

// init object
//const myEmitter = new MyEmitter();

// Event listener
//myEmitter.on('event',()=>console.log('Event Fired'))

// Init event
// myEmitter.emit('event');


class Logger extends EventEmitter
{
    log(msg)
    {
        this.emit('message',{id:uuid.v4(),msg})
    }
}

module.exports =Logger

/*
inside index.js file

const Logger = require('./reference/Event_demo');

const logger = new Logger();

logger.on('message',(data)=>console.log("called listener:",data));

logger.log("hello world")

*/
