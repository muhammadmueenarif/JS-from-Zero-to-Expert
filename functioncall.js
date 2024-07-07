function greet(name) {
    console.log(`hello , ${name}`);
}

greet ('john');

function dosomething(callback) {    
    console.log('doing something else');
    callback();
}

function callbackFunction() {
    console.log('callback function called');
}

dosomething(callbackFunction);