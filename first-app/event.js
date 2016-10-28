var EventEmitter = require("events").EventEmitter
var emitter = new EventEmitter();

emitter.on("play", function(msg){
	console.log(msg);
})

emitter.emit("play", "Let us play with Events");