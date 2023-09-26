"use strict";
// Exercise #1
console.log("Hello, World!");
// Exercise #2
let myName = "Austin";
console.log(myName);
// Exercise #3
function calcAreaRect(length, width) {
    return length * width;
}
let area = calcAreaRect(2, 4);
console.log(area);
// Exercise #4
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let myNumIsEven = isEven(5);
console.log(`Number is even: ${myNumIsEven}`);
// Exercise #5
function logFirstTen() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
logFirstTen();
// Exercise #6
function greetUser() {
    let userName = prompt("What is your name?");
    console.log(`Hello, ${userName}`);
}
// greetUser() // Does not work using node
// Exercise #7
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(10));
// Exercise #8
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(`2023 is leap year: ${isLeapYear(2023)}`);
// Exercise #9
function addToHundred() {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total += i;
    }
    return total;
}
console.log(addToHundred());
// Exercise #10
function allArithmetic(num1, num2) {
    console.log(`Addition: ${num1 + num2}`);
    console.log(`Subtraction: ${num1 - num2}`);
    console.log(`Multiplication: ${num1 * num2}`);
    console.log(`Division: ${num1 / num2}`);
}
allArithmetic(5, 10);
