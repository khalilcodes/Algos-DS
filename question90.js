// Write a program to produce the sum as  below         
// (1) + (1+2) + (1+2+3) + (1+2+3+4) + ... + (1+2+3+4+...+n)

var readline = require('readline-sync');
var n = readline.question("Enter value: ");

var array = [];
var sum = 0;
var total = 0;
str = "";

x = 1;

for (var i = 1; i <= n; i++) {
    while(array.length < i) {
        array.push(x)
        sum = sum + x;
    }
    total = total + sum
    x++
    str = str + "+ (" + array.join('+') + ") "
}

console.log(str.replace("+ ","").concat(`= ${total}`))


