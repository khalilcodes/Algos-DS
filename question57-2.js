// Patterns - 2

// var numbrs = "11111";

// for (var i = 5; i > 0; i--) {
//     if (i == 4) {
//         numbrs = "2222";
//     } else if (i == 3) {
//         numbrs = "333";
//     } else if (i == 2) {
//         numbrs = "22";
//     } else if (i == 1) {
//         numbrs = "1";
//     }
//     console.log(numbrs);
// }

// for (var j = 1; j <= 5; j++) {
//     var num = "54321";
//     num = num.replace(j,"*");
//     console.log(num);
// }

// str = "";

// for (var i = 0; i < 5; i++) {
//     str = str + "*";
//     console.log(str);
// }

// console.log("");

// str2 = "******";

// for (var j = 5; j>0; j--) {
//     str2 = str2.slice(1) ;
//     console.log(str2);
// }

// Write a program to print Floyd’s triangle as shown below for given N lines:

var readline = require('readline-sync');
var n = readline.question("Enter no. of lines: ");

var x = 1;

for (var i = 0; i < n; i++) {
    arr = [];
    while (arr.length <= i) {
        arr.push(x)
        x++;
    }
    console.log(arr.join(" "));
}


