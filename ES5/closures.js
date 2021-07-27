function getYearsUntilRetirement(retirementAge) {
    var endOfString = ' years left until retirement.';
    return function(birthYear) {
        var age = new Date().getFullYear() - birthYear;
        console.log((retirementAge - age) + endOfString);
    }
}

var getYearsUntilRetirementPakistan = getYearsUntilRetirement(65);
var getYearsUntilRetirementUS = getYearsUntilRetirement(66);

getYearsUntilRetirementPakistan(1998);
getYearsUntilRetirementUS(2000);

// the function that is being returned, is able to use the variables of the outer function, getYearsUntilRetirement, even after the outer function has returned.
// This is because in the 'creation phase' the scope chain of the inner function kept track of the variables it had access to, which included the variables of its
// parent function. Thus, this utilization of variables of the parent function by the child function, even after the execution context of the parent function has 
// been popped off the call stack, is known as closure.