var a= 5;
var b=8;

var c = a && b; // if all true, will print last value

console.log("C = ",c)

var c = a && null && b; // print false(value) as soon as it appears

console.log(c);


var a= 5;
var b=0;

var c = a || b; // print first true value
console.log("C = ",c)

var c = a || null || b; // print first true value

console.log(c);
    