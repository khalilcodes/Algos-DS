//synchronous - one step at a time - blocking
//Async - Non blocking

function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

function three() {
    console.log("three");
}

one();
setTimeout(two,2000);
three();