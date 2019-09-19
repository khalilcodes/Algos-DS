// Write a program to find Median of the given Array?

var readlineSync = require('readline-sync');

var lengthOfArray = readlineSync.question("Enter the length of the array: ");

var array = [];

for (var i = 0; i < lengthOfArray; i++) {
    var enterElement = readlineSync.question("enter element " + [i+1] + ": ");
    array.push(enterElement);
}

var median;
var previous;
var medianEven;

if (lengthOfArray % 2 != 0) {
    median = Math.floor(lengthOfArray/2);
    console.log(array[median]);
} else {
    median = Math.floor(lengthOfArray/2);
    previous = Math.floor(median - 1);
    medianEven = Number(array[median]) + Number(array[previous]);
    console.log(medianEven/2);
}
