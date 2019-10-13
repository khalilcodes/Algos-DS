// Write a program to generate Prime  Numbers less than N and 
// Generate ‘N’ Prime Numbers/in given range.

// by Khalil Ali - theHackingSchool.

var readlineSync = require("readline-sync");

var num = Number(readlineSync.question("Enter Number: "));

var array = [];
var arrayWithNumber = [];

function prime(x) {

    var factor = 0;

    for (var i = 2; i <= x; i++) {
        if(x % i == 0) {
            factor++;
        }
    }

    (factor == 1) ? true : false;
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