// class Animal {
//     constructor(name, type) {
//         this.name=name;
//         this.type=type;
//     }
//     makeSound() {
//         console.log("Generic Animal Sound");
//     }
// }

// const lion = new Animal("leo", "mammal");
// lion.makeSound();

class MathUtils {
    static square(x) {
        return x*x;
    }
    static cube(x) {
        return x*x*x;
    }
}

console.log(MathUtils.square(3));
console.log(MathUtils.cube(3));