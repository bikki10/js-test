const fs = require("fs");

const rs = fs.createReadStream("./text.txt");

rs.on("open", ()=>{
    console.log("File opened");
});

rs.on("data", (data) => {
    console.log(data.toString());
});