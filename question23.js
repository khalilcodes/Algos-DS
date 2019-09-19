// Write a program to check whether a number is a positive number or negative number?

var readlineSync = require('readline-sync');

var num = readlineSync.question("Enter the number: ");

if (num == "-0" || num < -0) {
    console.log("This is a Negative number.");
} else {
    console.log("This is a Positive number.");
}

