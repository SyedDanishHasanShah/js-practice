
var outerFunction = function() {
    console.log('Hello from the outer function!');
    var innerFunctionOne = function() {
        console.log('Hello from innerFunctionOne!');
    }
    var innerFunctionTwo = function() {
        console.log("Hello from innerFunctionTwo!");
    }

    return innerFunctionTwo;
}

var myFunction = outerFunction(); // will return innerFunction Two;

myFunction(); 

// cannot access innerFunctionOne at all!

// innerFunctionOne(); Not accessible at all.
// innerFunctionTwo(); Not accessible through the innerFunctionTwo identifier. But, since, it has been returned, we can store it in a new variable and 
// access it that way.