// Exercise #1
console.groupCollapsed("Function Scope");
function outerFunction() {
    let outerVar = "I'm outside!";

    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar); // I'm outside!
        console.log(innerVar); // I'm inside!
    }
    innerFunction();
}
outerFunction();
console.groupEnd();

// Exercise #2
console.groupCollapsed("Function Hoisting");
function mainFunction() {
    // Call the hoistedFunction here
    hoistedFunction();
    // Now, declare the hoistedFunction below
    function hoistedFunction() {
        console.log("Testing function hoisting");
    }
}
mainFunction();
console.groupEnd();

// Exercise #3
console.groupCollapsed("Basic Closure");
function outerFunction() {
    const x = "123";
    return function () {
        console.log(x);
    };
}
let testClosureFunction = outerFunction();
testClosureFunction();
console.groupEnd();

// Exercise #4
console.groupCollapsed("Local and Global Scope");
// Declare a global variable here
let globalVar = "Austin";
function modifyGlobal() {
    // Try to modify the global variable here
    globalVar = "Molli";
    console.log(globalVar); // Molli
}
function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let globalVar = "Watson";
    console.log(globalVar); // Watson
}
// Call both functions here
console.log(globalVar); // Austin
modifyGlobal();
console.log(globalVar); // Molli
localScopeTest();
console.log(globalVar); // Molli
console.groupEnd();

// Exercise #5
console.groupCollapsed("Function Factory");
function functionFactory(myName) {
    return function () {
        console.log(`My name is ${myName}`);
    };
}
let nameFunction = functionFactory("Austin");
nameFunction();
console.groupEnd();

// Exercise #6
console.groupCollapsed("Hoisting Variable");
function hoistingTest() {
    // console.log(x); // Reference Error
    let x = "Test";
}
hoistingTest();
console.groupEnd();

// Exercise #7
console.groupCollapsed("Counter Closure");
function setupCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
let counter = setupCounter();
counter();
counter();
counter();
console.groupEnd();

// Exercise #8
console.groupCollapsed("Scope, Hoisting, and Closures");
function setupResetingCounter() {
    let count = 0;
    return function () {
        if (count == 10) {
            count = 1;
        } else {
            count++;
        }
        console.log(count);
    };
}
let resettingCounter = setupResetingCounter();
for (let i = 1; i <= 30; i++) {
    resettingCounter();
}
console.groupEnd();
