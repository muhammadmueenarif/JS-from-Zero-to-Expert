function greet(name) {
    console.log(`hello, ${name}`);
}
const person = {name: 'john'};
greet.apply(person, ['Alice']);

const numbers = [2,5,8,10,3];
const maxNumber= Math.max.apply(null, numbers);
console.log("max numbers: ", maxNumber);