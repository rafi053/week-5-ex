const fs = require("fs");

function readFromMyFile() {
  const text = fs.readFileSync("./elad.txt", "utf8");
  return text;
}

async function writeToMyFile(text) {
  fs.writeFile("./elad.txt", text, (err) => {
    if (err) throw err;
    console.log("updated elad.txt");
  });
}

async function addToMyFile(text) {
  fs.appendFile("./elad.txt", text, (err) => {
    if (err) throw err;
    console.log("updated elad.txt");
  });
}

module.exports = { readFromMyFile, writeToMyFile, addToMyFile };
