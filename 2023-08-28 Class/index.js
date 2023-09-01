// Exercise 1
console.log("Hello, World!");

// Exercise 2
let myName = "Austin";
console.log(myName);

// Exercise 3
let length = 10;
let width = 5;
console.log(length * width);

// Exercise 4
let evenOddNum = 13;
// Check if even
if (evenOddNum % 2 == 0) {
    console.log("This number is even");
}
else {
    console.log("This number is odd");
}

// Exercise 5
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercise 6
// const userName = prompt("What is your name: ");
const userName = "Austin";
console.log(`Hello, ${userName}!`);

// Exercise 7
let factorialNum = 10;
let factorial = 1;
for (i = 2; i <= factorialNum; i++) {
    factorial = factorial * i;
}
console.log(`The factorial of ${factorialNum} is ${factorial}`);

// Excercise 8
let year = 2027;
if (year % 4 == 0) {
    console.log(`The year ${year} is a leapyear`)
}
else {
    console.log(`The year ${year} is not a leapyear`)
}

// Exercise 9
let j = 0;
let sum = 0;
while (j <= 100) {
    sum = sum + j;
    j++;
}
console.log(sum);

// Exercise 10
// let num1 = Number(prompt("Num 1: "));
// let num2 = parseInt(prompt("Num 2: "));
let num1 = 10;
let num2 = 5;
console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(`${num1} - ${num2} = ${num1 - num2}`)
console.log(`${num1} * ${num2} = ${num1 * num2}`)
console.log(`${num1} / ${num2} = ${num1 / num2}`)
console.log(`${num1} % ${num2} = ${num1 % num2}`)
console.log(`${num1} / ${num2} = ${num1 / num2}`)

// Exercise 11
let stringVar = "Austin";
let numberVar = 1;
let booleanVar = true;
let nullVar = null;
let undefinedVar = undefined;
let objectVar = {test: "test"};
let arrayVar = [1, 2, 3];
let noDefaultVar;

// Exercise 12
foods = [
    {
        foodName: "Coke",
        price: 1.50
    },
    {
        foodName: "Sandwich",
        price: 5
    },
    {
        foodName: "Sundae",
        price: 2
    }
];
const foodDiv = document.querySelector(".food-list");
const foodList = document.createElement("ul");
foodDiv.appendChild(foodList);
for (let food of foods) {
    const foodItem = document.createElement("li")
    foodItem.innerText = `${food.foodName}: \$${food.price}`;
    foodList.appendChild(foodItem);
}

// Exercise 13
function arrayOfMultiplies(num, len) {
    output = [];
    for (let i = 1; i <= len; i++) {
        output.push(num * i)
    }
    return output
}
console.log(arrayOfMultiplies(2, 10));