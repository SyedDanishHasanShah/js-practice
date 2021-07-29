console.log('test'); // 1, because it is top level code's first line

setTimeout(() => console.log("0 second timer"), 0); // 4, because callbacks from the callback queue are executed after the microtasks queue is empty.

Promise.resolve('Resolved promise 1')
.then(response => console.log(response)); // 3, because promises are sent to the microtasks queue after settling, and the microtasks queue has 
// priority over the callback queue.

console.log('test end'); // 2 because, it is top-level code's second line