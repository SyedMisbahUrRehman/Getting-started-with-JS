var $name = prompt("Enter your name!");

console.log($name);

//concatenation issue arises
var age=prompt("Enter your age");
var newAge= age+5;
console.log(newAge)

// convertin string to integer  using parseInt()

var sum= parseInt(age)+5;
console.log(sum)  // NaN if string is passed in age

//parseFloat() if decimal value wanted 

var decSum = parseFloat(age)+5;
console.log(decSum)

//Number()

var num = Number(age)
console.log(num)

















