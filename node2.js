const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("Saini", "Paptawan");
console.log("The content of the file is: ");
console.log(text)

console.log("creating new file...")
fs.writeFileSync("Pap.txt", text)