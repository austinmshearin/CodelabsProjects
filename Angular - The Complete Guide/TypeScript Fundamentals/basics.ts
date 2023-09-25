// === Primitive types: number, string, boolean

let age: number = 31;
let userName: string = "Austin";
let isAdmin: boolean = true;

// === Complex types: arrays, objects

// Define an array that can only contain strings
let hobbies: string[] = ["Biking", "Hiking"];
// Define an object that can only have two key value pairs where name is string and age is number
let person: {name: string; age: number;} = {name: "Austin", age: 31};
// Define an array of objects with set key value pairs and types
let people: {name: string; age: number;}[];

// === Type inference

// Typescript infers that course is meant to be a string based on assignment
let course = "React - The Complete Guide";
// Below gives an error since the above type inferred is a string
// course = 123123;
// Union type allows either string or number to be assigned
let courseId: string | number;

// === Type alias

// Can define an alias for a complicated type
type Person = {name: string, age: number};
// Can then use the alias as a type
let anotherPerson: Person = {name: "Cricket", age: 10};
// Can combine the alias with other types like using the array
let morePeople: Person[] = [{name: "Watson", age: 6}, {name: "Mango", age: 4}];

// === Functions

// Type can be set for function parameters and return data types
function add(a: number, b: number): number {
    return a + b;
}
// Functions with no return have a return data type of void
function printValue(value: any): void {
    console.log(value);
}

// === Generics

// Defining a generic type T using angle brackets
// Using T for the inputs and outputs means the data type of the input matches the data type of the output
function insertAtBeginning<T>(array: T[], value: T): T[] {
    const newArray = [value, ...array];
    return newArray;
}
// The demoArray is an array of numbers
const demoArray = [1, 2, 3];
// TypeScript determines the input datatype of demoArray and assigns the correct data type to the returned array
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// === Classes

// Example class using type scripting on properties, constructor parameters, and method parameters
class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[]; // private properties

    constructor(firstName: string, lastName: string, age: number, courses: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName: string): void {
        this.courses.push(courseName);
    }

    listCourses(): string[] {
        return this.courses.slice();
    }
}
const student = new Student("Joe", "Blow", 123, ["physics", "math"]);
student.enroll("Trig");
student.listCourses();

// == Interfaces

// An interface defines an object structure
interface Human {
    firstName: string;
    age: number;
    greet: () => void;
}
// The interface can be used similarly to the alias type above for objects
let max: Human;
max = {
    firstName: "Max",
    age: 30,
    greet() {
        console.log("Hello");
    }
}
// It is more often used to be sure new classes have a set structure to them or it will throw an error
// All of the propertie and methods in the interface must be present in the new class that implements the interface
class Instructor implements Human {
    firstName: string;
    lastName: string;
    age: number;
    greet() {};
}
