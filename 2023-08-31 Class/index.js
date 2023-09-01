// Exercise 1
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("John");

// Exercise 2
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));

// Exercise 3
person = {
    name: "F-22",
    age: 100,
    gender: "Airplane"
};
console.log(person);

// Exercise 4
car = {
    make: "Chevrolet",
    model: "Cavalier",
    year: "1993"
};
console.log(car);

// Exercise 5
function reverseString(text){
    newText = "";
    for (let i = text.length; i >= 0; i--) {
        newText += text.charAt(i)
    }
    return newText
}
console.log(reverseString("Hello"));

// Exercise 6
function areaCircle(radius) {
    return Math.PI * radius * radius
}
console.log(areaCircle(1));

// Exercise 7
const now = new Date();
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toUTCString());
console.log(now.toISOString());

// Exercise 8
console.log(Math.random() * 10);

// Exercise 10
let x = "wood";
console.log(`How much ${x} could a ${x}chuck chuck if a ${x}chuck could chuck ${x}`)

// Exercise 11
currentUser = {
    name: "Austin",
    age: "30",
    occupation: "Data Scientist"
}
function outputUser() {
    userDiv = document.querySelector(".user-details");
    ul = document.createElement("ul");
    userDiv.appendChild(ul);
    nameli = document.createElement("li");
    nameli.innerText = `name: ${currentUser.name}`;
    ul.appendChild(nameli);
    ageli = document.createElement("li");
    ageli.innerText = `age: ${currentUser.age}`;
    ul.appendChild(ageli);
    occupationli = document.createElement("li");
    occupationli.innerText = `occupation: ${currentUser.occupation}`;
    ul.appendChild(occupationli);
}

// Exercise 12
demoObject = {
    "a": 123,
    "b": 456,
    "c": 789
};
function outputObject(obj) {
    output = [[], []]
    for (let keyValue of Object.entries(obj)) {
        output[0].push(keyValue[0]);
        output[1].push(keyValue[1]);
    }
    return output
}
console.log(outputObject(demoObject));
