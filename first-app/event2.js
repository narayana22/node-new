var EventEmitter = require("events").EventEmitter
var emitter = new EventEmitter();

var fs = require("fs");
var fileName = "./sample.txt"

//1.start reading file
emitter.on("start_reading", function(fileNmae){
	console.log("Strat reading file")
fs.readFile(fileName, function(err, data){
	if(err){
		emitter.emit("error", err)
	}
	else
	{
		console.log("done reading the file");
		emitter.emit("print_content", data)
	}
})
});

//2.print the file content
emitter.on("print_content", function(data){

console.log(data.toString());
console.log("done printing the data !!");
emitter.emit("done");
});

//3. Error
emitter.on("error", function(err){
console.log("opps some thing went wrong !!!");
console.log(err)
});

//4.done
emitter.on("done", function(){

	console.log("Done with EventEmitter is ")
})

emitter.emit("start_reading", fileName);