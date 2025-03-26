// asyncronus with non-blocking
const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, content)=>{
    console.log(err, content);
});
console.log("My name is: ")