// highest and lowest in array

var readlineSync = require('readline-sync');

var lengthOfArray = readlineSync.question("Enter the length of the array: ");

var array = [];
var A;
var B;

for (var i = 0; i < lengthOfArray; i++) {
    array.push(Number(readlineSync.question("enter element " + [i+1] + ": ")));
}

function HighLowNum() {

    A = array[0];
    B = array[0];

    for(var j = 0; j < array.length; j++) {
        if (array[j] > A) {
            A = array[j];
        }
        if (array[j] < B) {
            B = array[j];
        }
    }
    console.log(A);
    console.log(B);
}

HighLowNum()

