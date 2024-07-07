// it allows to execute tasks without blocking main thread.
// it is used to execute tasks in background.

function stepOne(callback) {
    setTimeout(() => {
       console.log('step one completed');
       callback();
    }, 1000);   
}

function stepTwo(callback) {
    setTimeout(() => {
       console.log('step Two completed');
       callback();
    }, 1000);   
}

function stepThree(callback) {
    setTimeout(() => {
       console.log('step three completed');
       callback();
    }, 1000);   
}



stepOne(()=> {
    stepTwo(()=> {
        stepThree(()=> {
            console.log('all steps completed');
            });
    });
})
// in above steps, we have multiple callbacks that leads to callback hell. 