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
    return function innerFunction(){
        console.log(x);
    }
}
testClosureFunction = outerFunction();
testClosureFunction();
console.groupEnd();
