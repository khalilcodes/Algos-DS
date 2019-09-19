// Write a Program to check if a given matrix is an identity matrix

var readlineSync = require('readline-sync');

var a = [];
var b = [];

var n = Number(readlineSync.question("Enter the size for matrix: "));

for (var i = 0; i < n*n; i++) {
    a.push(Number(readlineSync.question("enter value " + (i+1) + ": ")));
}

function idMatrix() {
    for (var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            if (i == j) {
                b.push(1);
            } else {
                b.push(0);
            }
        }
    }
    console.log(b);
}

idMatrix()

function checkMatrix() {
    for (var i = 0; i < n; i++) {
        if (a[i] == b[i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(a);

checkMatrix();

if (checkMatrix()) {
    console.log("it is an identity matrix");
} else {
    console.log("it is not an identity matrix");
}

