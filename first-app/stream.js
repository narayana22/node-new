var fs = require("fs");

var readable =  fs.createReadStream("./sample.txt",{encoding: "utf8", hightWaterMark:32*1024})

var writeable = fs.createWriteStream("./sample1.txt")

readable.on("data", function(chunk){

	console.log(chunk.length);
writeable.write(chunk);
});
