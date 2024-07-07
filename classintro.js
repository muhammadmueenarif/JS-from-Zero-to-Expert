// these are like blueprint for creating object, beginning structure, and organized to our code. 
// we can create multiple objects from a single class.
// class is a blueprint/template for creating object.
// class is a user defined data type.
// class is a collection of data members and member functions.

class Dog {
    constructor (name, breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} says woof`);
    }
}

const myDog = new Dog ('buddy', 'golden retriever');
myDog.bark();

class Animal {
    constructor (name) {
        this.name= name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super (name);
        this.breed= breed;
    }
    purr() {
        console.log(`${this.name} purr.`);
    }
}

const myCat= new Cat ('Whiskers', 'siamese');
myCat.makeSound();
myCat.purr();
