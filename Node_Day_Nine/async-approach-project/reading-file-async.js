
const fs = require('fs');

fs.readFile('dataOne.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})

fs.readFile('dataTwo.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})