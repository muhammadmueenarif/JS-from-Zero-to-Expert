function greet(name, callback) {
    console.log(`hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log('goodbye');
}

greet('Alice', sayGoodbye);


function fetchData(callback) {
    setTimeout(() => {
        const data= 'data fetched';
        callback(data);
    }, 2000);    
}

function processData(data) {
    console.log(`processing : ${data}`);    
};

fetchData(processData);

// callback helps to handle the operations that take time.