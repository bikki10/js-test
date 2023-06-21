//app.js

const http = require("http");
const currentDateTime = require("./myFirstModule");

http.createServer((request, respond) => {
    respond.end("Hello world! " + currentDateTime.myDateTime());
}).listen(8080);

console.log('App running on port 8080');