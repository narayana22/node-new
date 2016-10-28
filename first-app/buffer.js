var buffer = new Buffer("Hello");
console.log(buffer);
console.log(buffer.toString());
//console.log(buffer.toJSON());
//console.log(buffer[2]);

buffer.write("polland");
console.log(buffer.toString());