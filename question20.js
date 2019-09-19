// Write a program to find the largest number among three numbers

var readlineSync = require('readline-sync');

function enterNumbers() {
    var thisArray = [];
    var higherNumber;
    for(var i = 0; i < 3; i++) {
        var inputNumbers = Number(readlineSync.question("Enter Number " + [i+1] + ": "));
        if (inputNumbers != Number(inputNumbers) || inputNumbers == "") {
            console.log("please enter a valid number");
            enterNumbers();
            return;
        } else {
            thisArray.push(inputNumbers);
            higherNumber = thisArray[0];
            for(var n = 0; n < thisArray.length; n++) {
                if (thisArray[n] > higherNumber) {
                    higherNumber = thisArray[n];
                }
            }
        }
    }
    console.log("The largest number is: " + higherNumber);
    exit();
}

function exit() {
    var exitQuestion = readlineSync.question("Would you like to continue? (Y/n) : ");

    if (exitQuestion == "y" || exitQuestion == "Y") {
        console.log("here we go again...");
        enterNumbers();
    } else if (exitQuestion == "n") {
        console.log("Thank you, Goodbye!");
    } else {
        console.log("invalid response, try again.");
        exit();
    }
}

enterNumbers();