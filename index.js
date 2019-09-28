let justify = require('./src/justify');

let [ , , line, length ] = process.argv;

console.log(justify(line, length));
