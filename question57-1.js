// Patterns - 1

var str = "";

for (var i = 1; i <= 5; i++) {
    str =  str + i;
    console.log(str);
}

console.log(""); // Blank Space

var str2 = "123456";

for (var j = 6; j >= 1; j--) {
    str2 = str2.split(j).join("");
    console.log(str2);
}

console.log(""); // Blank Space

var str3 = "012345";

for (var k = 0; k <= 5; k++) {
    str3 = str3.split(k).join("");
    console.log(str3);
}

console.log(""); // Blank Space

var str4 = "";

for (var l = 5; l >= 1; l--) {
    str4 = l + str4;
    console.log(str4);
}