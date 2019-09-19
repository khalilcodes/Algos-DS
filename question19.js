// Write a program to check whether given character is vowel or consonant

var readlineSync = require('readline-sync');

function CheckChar() {

    var inputChar = readlineSync.question("Enter a character: ");
    
    if (inputChar.length > 1 || inputChar == Number(inputChar)) {
        console.log("Please enter a single character.");
        CheckChar();
        return;
    } else if ("aeiou".includes(inputChar)) {
        console.log("It's a Vowel.");
    } else {
        console.log("It's a Consonant.");
    }
}

CheckChar();

