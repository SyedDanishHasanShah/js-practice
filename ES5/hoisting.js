console.log(calculateAge(1998)); // accessible even before the function is defined. This is because the Variable Environment stores all the function declarations, 
// variable declarations, and arguments object in the 'creation' phase. So, when execution starts, the engine already has the definition of the function being
// referred to, even before its definition in the source code.

function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}

// console.log(calculateAgeTwo(1956)); // This function call does not work. Because, since the calculateAgeTwo has been stored in a variable, i.e. 
// calculateAgeTwo() function is a function expression, it behaves the same as a variable. It is only defined during the 'execution' phase, not in the creation phase.
// So, when it is encountered in the source code before its definition, then, at that time, it is undefined. And by calling it, we get an error.

// Main takeaway is that hoisting works only with function declarations, not function expressions.

var calculateAgeTwo = function(birthYear) {
    return new Date().getFullYear() - birthYear;
}


// console.log(myName); Will again, give an error. Variables declared with let/const are uninitialized in the creation phase, so, again, encountering them before
// their definition and declaration results in an error.

let myName = 'Danish'; 


console.log(myAge); // Here, we get undefined instead of an error. The variables declared with var are undefined, not uninitialized, so they can be accessed, 
// but possess no value.

var myAge = 22;