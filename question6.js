var readlineSync = require("readline-sync");

var num = Number(readlineSync.question("Enter Number: "));

var array = [];
var arrayWithNumber = [];

function prime(num) {
    if (num <= 1) {
        return false;
    } else if (num == 2 || num == 3 || num == 5 || num == 7) {
        return true;
    } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
        return false;
    } else {
        return true;
    }
}

for (var i = 0; i < num; i++) {
    if (prime(i)) {
        array.push(i);
    }
}

for (var j = 0; arrayWithNumber.length < num; j++) {
    if (prime(j)) {
        arrayWithNumber.push(j);
    }
}

console.log(array);
console.log(arrayWithNumber);