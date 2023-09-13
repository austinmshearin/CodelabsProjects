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
    method: function() {
        console.log(this);
    }
}
objectFunction.method();

// Exercise 2.2: Create an arrow function within another object. Execute it and note the behavior of "this".
objectArrow = {
    method: () => {
        console.log(this);
    }
}
objectArrow.method();

// Exercise #3
// Implement inheritance by creating a subclass "ElectricCar" derived from the "Car" class, adding properties like batteryLife.
// For the "ElectricCar" class, override the displayInfo method to also include battery life information.
