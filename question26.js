// Write a program check whether given character is an alphabet or not

var readlineSync = require('readline-sync');

var inputChar = readlineSync.question("Enter a character: ");

if (inputChar % 1 == 0) {
    console.log("This is not an Alphabet.");
} else {
    console.log("This is an Alphabet.");
}