// Exercise #1
console.log("Hello, World!");

// Exercise #2
let myName: string = "Austin";
console.log(myName);

// Exercise #3
function calcAreaRect(length: number, width: number): number{
    return length * width;
}
let area = calcAreaRect(2, 4);
console.log(area);

// Exercise #4
function isEven(num: number): boolean {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let myNumIsEven = isEven(5);
console.log(`Number is even: ${myNumIsEven}`);

// Exercise #5
function logFirstTen(): void {
    for (let i: number = 1; i <= 10; i++) {
        console.log(i);
    }
}
logFirstTen();

// Exercise #6
function greetUser(): void {
    let userName = prompt("What is your name?");
    console.log(`Hello, ${userName}`);
}
// greetUser() // Does not work using node

// Exercise #7
function factorial(num: number): number {
    let result: number = 1;
    for (let i: number = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(10));

// Exercise #8
function isLeapYear(year: number): boolean {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(`2023 is leap year: ${isLeapYear(2023)}`);

// Exercise #9
function addToHundred(): number {
    let total: number = 0;
    for (let i: number = 1; i <= 100; i++) {
        total += i;
    }
    return total;
}
console.log(addToHundred());

// Exercise #10
function allArithmetic(num1: number, num2: number): void {
    console.log(`Addition: ${num1 + num2}`);
    console.log(`Subtraction: ${num1 - num2}`);
    console.log(`Multiplication: ${num1 * num2}`);
    console.log(`Division: ${num1 / num2}`);
}
allArithmetic(5, 10);