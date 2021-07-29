// promisifying the setTimeout function
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
        // since a timer can never be rejected, there's actually no need for the reject function.
        // also, we can simply pass the resolve function into the set timeout function to be returned. We dont need to pass any arguments.
    });
}

const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening...');
    // setTimeout(() => {
    //     if (Math.random() >= 0.5) {
    //         resolve('You have won the lottery! :D')
    //     }
    //     else {
    //         reject(new Error('You lost your money! :\'('));
    //     }
    // }, 2000)
    wait(2)
    .then(() => {
        if (Math.random() >= 0.5) {
            resolve('You have won the lottery! :D');
        }
        else {
            reject(new Error('You lost your money! :\'('))
        }
    })
})

// the Promise constructor takes in exactly one argument, called the executor function. As soon as the Promise constructor runs, the executor function
// is executed immediately. As it executes the executor function, it will do so by passing in two arguments: Those arguments are the 
// resolve and reject functions. This executor function contains the asynchronous behaviour that we are trying to handle with the promise. This
// executor function should produce a result value, the value that is going to be the future value of the promise.
// calling the resolve function in the executor function will mark the promise as a fulfilled promise (a resolved promise). In the resolve function,
// we pass the fulfilled value of the promise, so that it can later be consumed in the then method.
// calling the reject method marks the promise as rejected. Then, we can pass a value to the reject function that will later be available as the error
// in the catch method.
// Thus, we can see that our promise either moves to the resolved (fulfilled) stage, or the rejected stage, using the resolve and reject functions.

lotteryPromise.then(res => {
    console.log(res); // arg passed in the resolve function
})
.catch(err => console.error(err.message)); // arg passed in the reject function



// wait(2)
// .then(() => {
//     console.log('Waited for two seconds!');
//     return wait(1);
// })
// .then(() => {
//     console.log('Waited an additional one second');
// })