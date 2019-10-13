// Write a program to produce the sum of squares upto given n value
// (1*1) + (2*2) + (3*3) + (4*4) + (5*5) + ... + (n*n)

var readline = require('readline-sync');
var n = readline.question("Enter value: ");

var array = [];
var sum = 0;
var str = "";

for (var i = 1; i <= n; i++) {
    array.push(i);
    sum = sum + (i*i);
    str = str + " + " + `(${i}*${i})`;
}

console.log("");
console.log(str.replace(" + ", "").concat(` = ${sum}`));
console.log("");