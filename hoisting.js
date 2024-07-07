// how js handle function declaration?
console.log(myVar); //undefined

var myVar = 10;
console.log(myVar); // 10


sayHello();
function sayHello() {
    console.log('Hello');
    }
 // output is hello. 
 
 if (true) {
    console.log(blockVar);
    let blockVar= "I'm block-scoped";
 }
