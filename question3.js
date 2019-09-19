var readlineSync = require("readline-sync");

var num = readlineSync.question("Enter Number: ");

function prime() {
    
    if (num <= 1) {
        console.log("Not Prime");
    } else if (num == 2 || num == 3 || num == 5 || num == 7) {
        console.log("Prime");
    } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
        console.log("Not Prime");
    } else {
        console.log("Prime");
    }
}

prime();