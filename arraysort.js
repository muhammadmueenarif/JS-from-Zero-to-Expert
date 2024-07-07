// we can sort in ascending, descending or custom order. 
let numbers = [42,13,7,25,34];
numbers.sort((a,b) => a-b);
console.log("sorted numbers : ", numbers);

let fruits = ['apple', 'banana', 'orange', 'Grapes', 'lemon'];
fruits.sort();
console.log("sorted fruits : ", fruits);

let people =[
    { name:'Alice', age:30  }, 
    {name:'bob', age:25},
    {name:'Charlie', age:35}
];
people.sort((a,b) => a.age - b.age);
console.log("sorted people by age : ", people);
