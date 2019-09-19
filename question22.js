// Write a program to Check Whether the given year is a leap year or not

var readlineSync = require('readline-sync');

var inputYear;

function Step1() {
    inputYear = Number(readlineSync.question("Enter a year : "));

    if (inputYear % 4 == 0) {
        Step2();
    } else {
        console.log(inputYear + " is not a leap year.");
        exit();
    }
}

function Step2() {
    if (inputYear % 100 != 0) {
        console.log(inputYear + " is a leap year.");
        exit();
    } else {
        Step3();
    }
}

function Step3() {
    if (inputYear % 400 == 0) {
        console.log(inputYear + " is a leap year.");
    } else {
        console.log(inputYear + " is not a leap year.");
    }
    exit();
}

function exit() {
    var exitQuestion = readlineSync.question("Would you like to continue? (Y/n) : ");

    if (exitQuestion == "y" || exitQuestion == "Y") {
        Step1();
    } else if (exitQuestion == "n") {
        console.log("Thank you, Goodbye!");
    } else {
        console.log("invalid response, try again.");
        exit();
    }
}

Step1();