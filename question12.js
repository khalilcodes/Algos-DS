// Write a  program for swapping of two arrays

var readlineSync = require("readline-sync");

var array1;
var array2;

function inputArrays() {
    array1 = [];
    array2 = [];
    var firstArray = readlineSync.question("Enter first array : ");
    var secondArray = readlineSync.question("Enter second array : ");

    for (var i = 0; i < firstArray.length; i++) {
        array1.push(firstArray[i]);
        array2.push(secondArray[i]);
    }

    console.log("First Array: ", array1);
    console.log("Second Array: ", array2);

    toSwap();
}

function toSwap() {
    var swapQuestion = readlineSync.question("Press enter to swap ");

    if (swapQuestion == "") {
        swap();
    } else {
        console.log("just press enter bro.")
        toSwap();
    }
}

function swap() {
    var swp = array1;
    array1 = array2;
    array2 = swp;
    
    console.log("New First Array: ", array1);
    console.log("New Second Array: ", array2);

    exit();
}

function exit() {
    var exitQuestion = readlineSync.question("Would you like to continue? (Y/n) : ");

    if (exitQuestion == "y" || exitQuestion == "Y") {
        console.log("here we go again...");
        inputArrays();
    } else if (exitQuestion == "n") {
        console.log("Thank you, Goodbye!");
    } else {
        console.log("invalid answer, try again.");
        exit();
    }
}

inputArrays();