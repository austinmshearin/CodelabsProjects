// Understanding Basic Functions in JavaScript
console.groupCollapsed("Understanding Basic Functions");

// A no-parameter function displaying a greeting
greeting = function() {
    console.log("Hello!");
}
greeting();

// A function accepting a name as its parameter to show a personalized greeting
personalGreeting = function(name) {
    console.log(`Hello, ${name}!`);
}
personalGreeting("Jeff");

// A function taking two numbers as parameters, returning their sum
twoNumSum = function(num1, num2) {
    return num1 + num2;
}
console.log(`Sum: ${twoNumSum(2,3)}`);

console.groupEnd();

// Mastering Basic Arrow Functions in JavaScript
console.groupCollapsed("Mastering Basic Arrow Functions");

// A function that accepts two arguments and returns their product
let twoNumProd = (num1, num2) => num1 * num2;
console.log(twoNumProd(2, 3));

// A function that takes in a string and returns it in uppercase
let textUpper = text => text.toUpperCase();
console.log(textUpper("Test text"));

// A function with a single parameter, calculating the square of the provided number
let numSquare = num => num * num;
console.log(numSquare(4));

console.groupEnd();