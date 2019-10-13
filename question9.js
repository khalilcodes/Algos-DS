// Write a program find GCD of the array elements given an array of numbers,

var readline = require('readline-sync');

a = 22;
b = 44;
arrayA = [];
arrayB = [];

for (var i = 0; i <= a; i++) {
    if (a%i == 0) {
        arrayA.push(i);
    }
}

for (var i = 0; i <= b; i++) {
    if (b%i == 0) {
        arrayB.push(i);
    }
}

console.log(arrayA);
console.log(arrayB);





