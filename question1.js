var readlineSync = require('readline-sync');

function f() {
    var inputNumber = readlineSync.question("Please enter a number : ");
    
    if (inputNumber == "q") { 
        return;
    } else if (inputNumber != Number(inputNumber)) {
        console.log("invalid input");
        f();
    } else if (Number(inputNumber) % 2 == 0) {
        console.log("even");
        exit();
    } else if (Number(inputNumber) % 2 != 0) {
        console.log("Odd");
        exit();
    } else {
        return;
    }
}

function exit() {
    var inputBool = readlineSync.question("Do you want to continue (Y/n): ")
    if (inputBool == "y" || inputBool == "Y") {
        f();
    } else if (inputBool == "n") {
        console.log("Thank you, Goodbye!");
        return;
    } else {
        console.log("invalid response.");
        exit();
    }
}

f();