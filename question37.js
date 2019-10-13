// Write a Program to check the frequency(count) of odd numbers and even numbers in matrix

var readlineSync = require('readline-sync');

var a = [];

var matrixSize = readlineSync.question("Enter matrix size: ");

var countEven = 0;
var countOdd = 0;

for (var i = 0; i < matrixSize; i++) {
    a.push(readlineSync.question("enter matrix value " + (i+1) + " : "));
    if (a[i] % 2 == 0) {
        countEven++;
    } else {
        countOdd++;
    }
}

console.log(a);
console.log(`Count of Even Numbers: ${countEven}`);
console.log(`Count of Odd Numbers: ${countOdd}`);