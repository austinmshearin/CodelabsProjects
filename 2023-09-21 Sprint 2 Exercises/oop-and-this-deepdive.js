// Implement sample code that showcase basic OOP principles discussed in the the video lesson
class User {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}
let user = new User("Watson", 6, "Springfield, MO");
console.log(user);

// Craft a simple code snippet that illustrates different behaviors of the "this" keyword based on context
// Discuss how "this" behaves in arrow functions versus traditional functions
class Car {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} goes ${this.sound}`);
    }
}
let myCar = new Car("Chevy", "vroom");
myCar.makeSound();

// Develop a class named "Playlist"
class Playlist {
    constructor() {
        this.videos = [];
        this.durations = [];
    }
    addVideo(title, duration) {
        this.videos.push(title);
        this.durations.push(duration);
    }
    totalDuration() {
        let durationSum = 0;
        for (let duration of this.durations) {
            durationSum += duration;
        }
        return durationSum;
    }
    averageDuration() {
        return this.totalDuration() / this.videos.length;
    }
}
let myPlaylist = new Playlist();
myPlaylist.addVideo("Scooby Doo", 2);
myPlaylist.addVideo("Titanic", 3);
console.log(myPlaylist);
console.log(myPlaylist.totalDuration());
console.log(myPlaylist.averageDuration());
