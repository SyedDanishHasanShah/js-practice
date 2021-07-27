(function(animalOne, animalTwo) {
    console.log('The quick brown ' + animalOne + ' jumps over the lazy ' + animalTwo + '.');
})('fox', 'dog');

// IIFEs are used for data privacy. So that whatever's inside it is not accessible outside. This is done when our code only has to be executed once, otherwise, 
// we would be better served creating a function. Since IIFE is also a function (just not repeatedly executable), we can pass arguments into it too. We create IIFEs
// to create a new scope, which is inaccessible (due to how the scope chain works), from outside. Thus, we obtain data privacy and don't interfere with objects 
// in the global execution context.
// parenthesis are used to trick the parser into thinking the function is an expression, not a statement. In JavaScript, anything inside a () cannot be a statement.