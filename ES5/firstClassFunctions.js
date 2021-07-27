var years = [1990, 1998, 1995, 1980, 1965];

function performArrayCalculation(array, func) { // passing a function as an argument into another function
    resultingArray = [];
    for (var i = 0; i < array.length; i++)  {
        resultingArray[i] = func(array[i]);
    }
    return resultingArray;
}

function getAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

ages = performArrayCalculation(years, getAge);
console.log(ages);

function foo(num) {
    var bar = function() {
        return num;
    }
    return bar; // returning a function from another function
}

var getMyNumber = foo(5); // storing bar in a variable, then invoking it whenever we want. (Also an example of closure, since the inner function gets access to 
// the outer function's variable, long after the outer function has stopped executing. )

console.log(getMyNumber()); 
console.log(getMyNumber());
