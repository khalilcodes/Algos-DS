// Write a Program to check if a given matrix is an identity matrix

var readlineSync = require('readline-sync');

var a = [];
var b = [];

var n = Number(readlineSync.question("Enter the size for matrix: "));

for (var i = 0; i < n*n; i++) {
    a.push(Number(readlineSync.question("enter value " + (i+1) + ": ")));
}

for (var i = 0; i < n; i++) {
    for(var j = 0; j < n; j++) {
        if (i == j) {
            b.push(1);
        } else {
            b.push(0);
        }
    }
}
console.log(a);
console.log(b);

if (JSON.stringify(a) == JSON.stringify(b)) {
    console.log("it is an identity matrix");
} else {
    console.log("it is not an identity matrix");
}

