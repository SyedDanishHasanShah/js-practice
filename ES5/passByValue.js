num = 5;
console.log(num); // print 5

function changeNumber(num) {
    num = 3; 
    return num;
}

console.log(changeNumber(num)); // print 3, num from the function.

console.log(num); // num in the global scope has not changed, because changeNumber operated on a copy of num.