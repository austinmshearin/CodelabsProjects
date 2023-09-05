// *** Understanding Basic Functions in JavaScript ***
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



// *** Mastering Basic Arrow Functions in JavaScript ***
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



// *** Understanding and Utilizing Objects in JavaScript ***
console.groupCollapsed("Understanding and Utilizing Objects");

book = {
    "title": "The Book",
    "author": "The Author",
    "publication year": "0",
    "genre": "Literal"
}
console.log(book.read);
book.read = true;
console.log(book.read);
book.read = false;
console.log(book.read);
delete book.read;
console.log(book.read);

console.groupEnd();



// *** Mastering Functions and Objects  in JavaScript***
console.group("Mastering Functions and Objects");

// Exercise 1: Create a function named greetUser that takes a name as a parameter and returns a greeting message
function greetUser(userName) {
    console.log(`Hello, ${userName}`);
};
greetUser("Jeff");

// Exercise 3: Create an arrow function that calculates the area of a rectangle. It should take the length and breadth as parameters
let areaRectangle = (length, width) => length * width;
console.log(areaRectangle(3,4));

// Exercise 4: Object Creation and Manipulation
student = {
    name: "Bozo",
    age: "5",
    grade: "1st",
    details: function() {
        return `${this.name} is ${this.age} years old and is in ${this.grade} grade`
    }
}
console.log(student.details());

// Exercise 5: Advanced Object Methods
library = {
    books: [],
    addBook: function(bookName) {
        this.books.push(bookName);
    },
    removeBook: function(bookName) {
        let removeIndex = this.books.indexOf(bookName);
        this.books.splice(removeIndex, 1);
    }
}
library.addBook("Bible");
library.addBook("Calculus");
library.addBook("Physics");
console.log(library.books);
library.removeBook("Calculus");
console.log(library.books);

console.groupEnd();