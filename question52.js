// Write a program to find the minimum and maximum values that can be calculated by 
// summing exactly four of the five integers. Then print the respective minimum and 
// maximum values as a single line of two space-separated long integers.
// Example, Input: [1, 2, 3, 4, 5]
//          Output; [10, 14]

var readline = require('readline-sync');

var arr = [];
var output = [];

var arrayLength = Number(readline.question("Enter length of array: "));

for (var i = 0; i < arrayLength; i++) {
    arr.push(Number(readline.question(`enter element ${i+1}: `)));
}

var highNumber = arr[0];
var lowNumber = arr[0];

var maxSum = 0;
var minSum = 0;

for (var j = 0; j < arr.length; j++) {
    if (arr[j] > highNumber) {
        highNumber = arr[j];
    }
    if (arr[j] < lowNumber) {
        lowNumber = arr[j];
    }
    maxSum = maxSum + Number(arr[j]);
    minSum = minSum + Number(arr[j]);
}

maxSum = maxSum - lowNumber;
minSum = minSum - highNumber;

output.push(minSum,maxSum);

console.log(arr);
console.log(output);