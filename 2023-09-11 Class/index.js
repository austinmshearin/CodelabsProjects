// Exercise #1
console.groupCollapsed("Exercise #1");

function globalFunction() {
    console.log(this);
}
globalFunction();

objectMethod = {
    testMethod: function () {
        console.log(this);
    },
};
objectMethod.testMethod();

objectArrow = {
    testField: "test",
    testMethod: () => {
        console.log(this);
    },
};
objectArrow.testMethod();

console.groupEnd();

// Exercise #2
console.groupCollapsed("Exercise #2, #3, #4, and #5");

class Person {
    constructor(name, age) {
        this.name = name;
        this.personAge = age;
    }
    get age() {
        return this.personAge;
    }
    set age(newAge) {
        if (newAge < 0) {
            console.log("Invalid age");
        } else {
            this.personAge = newAge;
        }
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
    static info() {
        console.log("This is the Person class");
    }
}

let person1 = new Person("Watson", 6);
let person2 = new Person("Mango", 4);

person1.greet();
person2.greet();

Person.info();

person1.age = 10;
console.log(person1.age);

console.groupEnd();

// Exercise #7
console.groupCollapsed("Exercise #7");

class Book {
    #isbn;
    constructor(title, author, yearPublished, isbn) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.#isbn = isbn;
    }
    get isbn() {
        return this.#isbn;
    }
    get details() {
        return `${this.title} by ${this.author} published ${this.yearPublished} ISBN: ${this.isbn}`;
    }
}

// let testBook = new Book("Green Eggs and Ham", "Dr. Seuss", 2000, 123456789);
// console.log(testBook);
// console.log(testBook.isbn);
// console.log(testBook.details);

class Library {
    constructor() {
        this.books = [];
    }
    addBook(newBook) {
        this.books.push(newBook);
    }
    removeBook(bookIndex) {
        this.books.splice(bookIndex, 1);
    }
    listBooks() {
        console.log("The library contains:");
        for (let book of this.books) {
            console.log(book.details);
        }
    }
}

let myLibrary = new Library();
myLibrary.addBook(new Book("Green Eggs and Ham", "Dr. Seuss", 2000, 123456789));
myLibrary.addBook(new Book("The Bible", "God", 0, 1));
myLibrary.addBook(new Book("Koran", "Allah", 1, 2));
myLibrary.listBooks();
myLibrary.removeBook(1);
myLibrary.listBooks();

console.groupEnd();

// Exercise #8
console.groupCollapsed("Exercise #8");

class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }
    get averageGrade() {
        let gradeSum = 0;
        for (let grade of this.grades) {
            gradeSum += grade;
        }
        return gradeSum / this.grades.length;
    }
    get info() {
        return `${this.name} has grades ${this.grades.join(", ")} with an average grade of ${this.averageGrade}`;
    }
}

let student = new Student("Jim", [95, 96, 97]);
console.log(student);
console.log(student.info);

console.groupEnd();
