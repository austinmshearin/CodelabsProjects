// Exercise #3
type Person = {
    name: string,
    age: number,
    gender: string
}
let person: Person = {
    name: "Austin",
    age: 31,
    gender: "male"
}
console.log(person);

// Exercise #5
function reverseString(text: string): string {
    return text.split("").reverse().join("");
}
console.log(reverseString("Hello"));
