// Exercise #1
// Create a Car class with make, model, and year
// Add a displayInfo method that outputs the cars details
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
let myCar = new Car("Chevrolet", "Cavalier", 1993);
console.log(myCar);
console.log(myCar.displayInfo());

// Exercise 2.1: Craft a regular function within an object, then invoke it. Observe the behavior of "this".
objectFunction = {
    method: function () {
        console.log(this);
    },
};
objectFunction.method();

// Exercise 2.2: Create an arrow function within another object. Execute it and note the behavior of "this".
objectArrow = {
    method: () => {
        console.log(this);
    },
};
objectArrow.method();

// Exercise #3
// Implement inheritance by creating a subclass "ElectricCar" derived from the "Car" class, adding properties like batteryLife.
// For the "ElectricCar" class, override the displayInfo method to also include battery life information.
class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    displayInfo() {
        return `${this.year} ${this.make} ${this.model} w/ ${this.batteryLife}`;
    }
}

let myEV = new ElectricCar("Tesla", "Truck", 2023, 100);
console.log(myEV.displayInfo());

// Exercise #4
// Design a class "Student". Create an instance method that uses "this" to access the student's properties. Observe how "this" behaves within the class context.
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    info() {
        return `${this.name} is ${this.age} and has a ${this.grade}`;
    }
}

let student = new Student("Tim", 5, "F");
console.log(student.info());
