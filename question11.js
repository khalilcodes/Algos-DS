// Write a program to find the Sum of Array Elements.

var readlineSync = require('readline-sync');

var lengthOfArray = readlineSync.question("Enter the length of the array: ");

var array = [];
var sum = 0;

for (var i = 0; i < lengthOfArray; i++) {
    var enterElement = readlineSync.question("enter element " + [i+1] + ": ");
    array.push(enterElement);
}

for (var j = 0; j < lengthOfArray; j++) {
    sum = Number(sum) + Number(array[j]);
}

console.log(array);
console.log(sum);
