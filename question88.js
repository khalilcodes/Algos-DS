// Write a program to produce the sum of integers upto given input n
// 1 + 2 + 3 + 4 + 5 + ... + n.

var readline = require('readline-sync');

var n = readline.question("Enter no. of integers: ");
var arr = [];
var sum = 0;

for (var i = 1; i <= n; i++) {
    arr.push(i);
    sum = sum+i;
}

console.log(arr.join(" + ").concat(` = ${sum}`));