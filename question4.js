var readlineSync = require('readline-sync');

var inputNum1 = readlineSync.question("enter 1st number: ");
var inputNum2 = readlineSync.question("enter 2nd number: ");

function subtract(x, y) {
    if (y == 0) {
        console.log(x);
    } else {
        subtract((x^y), (~x & y) << 1)
    }
}

subtract(inputNum1, inputNum2)