// Find Mean of array

var readlineSync = require('readline-sync');

function errorLog(x) {
    if (x == "") {
        console.log("can't be empty, bro.");
    } else {
        console.log("invalid input. try again.");
    }
}

var arrayLength;

function lengthOfArray() {
    arrayLength = Number(readlineSync.question("Enter length of array : "));

    if (arrayLength != Number(arrayLength || arrayLength == "")) {
        errorLog(arrayLength);
        lengthOfArray();
    } else {
        elemInput();
    }
}

function elemInput() {
    var numArray = [];
    var elemValues;
    var totalValue;
    for(var i = 0; i < arrayLength; i++) {
        elemValues = Number(readlineSync.question("enter element " + [i+1] + " : "));

        if (elemValues != Number(elemValues || elemValues == "")) {
            errorLog(elemValues);
            elemInput();
            return;
        } else {
            numArray.push(elemValues);
        }
    }
    console.log(numArray);

    const add = (a, b) => a + b;
    totalValue = numArray.reduce(add) / arrayLength;

    console.log("The mean of array is: " + totalValue);
    exit();
}

function exit() {
    var exitQuestion = readlineSync.question("Would you like to continue? (Y/n) : ");

    if (exitQuestion == "y" || exitQuestion == "Y") {
        console.log("here we go again...");
        lengthOfArray();
    } else if (exitQuestion == "n") {
        console.log("Thank you, Goodbye!");
    } else {
        console.log("invalid answer, try again.");
        exit();
    }
}

lengthOfArray();