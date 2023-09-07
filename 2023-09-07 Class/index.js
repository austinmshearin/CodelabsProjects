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
mainFunction();
function mainFunction() {
  console.log("Testing function hoisting");
}
mainFunction();
console.groupEnd();
