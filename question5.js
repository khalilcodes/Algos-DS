var readlineSync = require('readline-sync');

var x = Number(readlineSync.question("enter number to divide: "));
var y = Number(readlineSync.question("enter divide by number: "));

function f() {
   var a = Math.floor(x/y);
   var b = Math.floor(a*y);
   var c = Math.floor(x-b);
   console.log(c);
}

f();