// Write a program to find the maximum number in an array using function

var readlineSync = require('readline-sync');

var lengthOfArray = readlineSync.question("Enter the length of the array: ");

var array = [];
var A;

for (var i = 0; i < lengthOfArray; i++) {
    var enterElement = Number(readlineSync.question("enter element " + [i+1] + ": "));
    array.push(enterElement);
}

function HighestNumber() {

    A = array[0];

    for(var j = 0; j < lengthOfArray; j++) {
        if (array[j] > A) {
            A = array[j];
        }
    }
    console.log(A);
}

HighestNumber()