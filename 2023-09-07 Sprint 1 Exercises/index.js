// Understanding Basic Functions in JavaScript

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