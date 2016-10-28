var fs = require("fs");

console.log("start reading file \n");

fs.writeFile(__dirname + "/sample.txt", "Hello sangam");

console.log("\n Done reading file");