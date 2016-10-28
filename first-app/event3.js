var EventEmitter = require("events").EventEmitter
var emitter = new EventEmitter();

emitter.on("swimming", function(msg){
	console.log(msg);
	
});
emitter.emit("swimming", "Hello sanga")
