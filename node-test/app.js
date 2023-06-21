//app.js

const http = require("http");
const currentDateTime = require("./myFirstModule");
const uc = require("upper-case");

http.createServer((request, respond) => {
    const message = uc.upperCase("hello world ");
    respond.end(message + currentDateTime.myDateTime());
}).listen(8080);

console.log('App running on port 8080');