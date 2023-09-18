// Exercise #1
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update();
        }
    }
}

class Observer {
    constructor(id) {
        this.id = id;
    }
    update() {
        console.log(`Observer ${this.id} updated!`);
    }
}

let mySubject = new Subject();

let obj1 = new Observer(1);
console.log(obj1);
mySubject.addObserver(obj1);

let obj2 = new Observer(2);
console.log(obj2);
mySubject.addObserver(obj2);

let obj3 = new Observer(3);
console.log(obj3);
mySubject.addObserver(obj3);

mySubject.notifyObservers();

// Exercise #2
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	}
};
let {name, age} = person;
console.log(name, age);

let {address: {city, country}} = person;
console.log(city, country);

const fruits = ['apple', 'banana', 'cherry', 'date'];
let [,second,,fourth] = fruits;
console.log(second, fourth);
