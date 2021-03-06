
const fs = require('fs');

// console.log('Hi 1');
// console.log('Hi 2');
// console.log('Hi 3');
// console.log('Hi 4');
// console.log('Hi 5');

var data1 = fs.readFileSync('dataOne.txt', "utf-8");
console.log(data1);

var data2 = fs.readFileSync('dataTwo.txt', "utf-8");
console.log(data2);