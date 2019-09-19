// Write a program to add and subtract of given (NXN) Matrices

var readlineSync = require('readline-sync');

var N1;
var N2;

function MatrixSize() {
    N1 = readlineSync.question("Please enter 1st Matrix size: ");
    N2 = readlineSync.question("Please enter 2nd Matrix size: ");

    if (N1 != N2) {
        console.log("These values do not produce a square matrix. please try again.");
        MatrixSize();
        return;
    } else {
        MatrixValues();
    }
}

var array1 = [];
var array2 = [];

function MatrixValues() {

    for (var i = 0; i < N1; i++) {
        array1.push(readlineSync.question("First matrix value " + (i+1) + ": "));
    }
    
    for (var i = 0; i < N2; i++) {
        array2.push(readlineSync.question("Second matrix value " + (i+1) + ": "));
    }
    console.log(array1);
    console.log(array2);
    AddMatrix();
}

addedArray = [];
function AddMatrix() {
    for (var i = 0; i < array1.length; i++) {
        addedArray.push(Number(array1[i]) + Number(array2[i]));
    }
    console.log("The addition of both Matrix is:");
    console.log(addedArray);
    SubtractMatrix();
}

subtractedArray = [];
function SubtractMatrix() {
    for (var i = 0; i < array1.length; i++) {
        subtractedArray.push(Number(array1[i]) - Number(array2[i]));
    }
    console.log("The subtraction of both Matrix is:");
    console.log(subtractedArray);
}

MatrixSize()




