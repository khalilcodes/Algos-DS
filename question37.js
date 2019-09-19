// Write a Program to check the frequency(count) of odd numbers and even numbers in matrix

var readlineSync = require('readline-sync');

var a = [];

var matrixSize = readlineSync.question("Enter matrix size: ");

for (var i = 0; i < matrixSize; i++) {
    a.push(readlineSync.question("enter matrix value " + (i+1) + " : "));
}

console.log(a);