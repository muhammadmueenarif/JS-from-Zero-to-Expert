// let numbers= [1, 2, 3, 4, 5];
// numbers.forEach(function(number){
//     console.log(number *2);
// })

// now create a filter method. it creates a new array with elements that fulfills the given condition.
// let numbers= [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(number){
//     return number % 2 === 0;
// })
// console.log(evenNumbers);

// now let's check  reduce method.
// let numbers= [2, 3, 4, 5, 6];
// let sum = numbers.reduce(function(accumulator, number){
//     return accumulator + number;
// }, 0);
// console.log(sum);

// now lets use map method. it creates new array by applying function to each element of old array. 
    let numbers= [2, 3, 4, 5, 6];
    let doubledNumbers = numbers.map(function(number){
        return number * 2;
    });
    
    console.log(doubledNumbers);
