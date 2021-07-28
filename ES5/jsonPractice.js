const fs = require('fs')

var fileData = fs.readFileSync('./example.json');
var jsonData = JSON.parse(fileData);
console.log(jsonData.members[0]);

var jsonAsString = JSON.stringify(jsonData);

console.log(jsonAsString);