// Write a program to produce the sum of series as below           
// 1! + 2! + 3! + 4! + 5! + ... + n!

var readline = require('readline-sync');
var n = readline.question("Enter n value: ");

var arr = [];
x = 1;
total = 0;
str = "";

for (var i = 1; i <= n; i++) {
    while(arr.length < i) {
        arr.push(i)
    }
    x = x * i
    total = total + x;
    str = str + ` + ${i}!`
}

console.log(str.replace(" + ", "").concat(` = ${total}`));