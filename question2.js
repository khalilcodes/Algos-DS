var readlineSync = require("readline-sync");

var o = [];
var e = [];

os = [];
es = [];

var n = readlineSync.question("enter number: ");

for(var i = 1; i < n; i++) {
    if (i % 2 == 0) {
        e.push(i);
    } else {
        o.push(i);
    }
}

console.log(e);
console.log(o);

for(var j = 1; j <= n*2; j++) {
    if (j % 2 == 0) {
        es.push(j);
    } else {
        os.push(j);
    }
}

console.log(es);
console.log(os);


