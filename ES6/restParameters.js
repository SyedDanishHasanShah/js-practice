function isFullAge(...years) {
    console.log(years.length);
    return years.map(el => el >= 18);
}


console.log(isFullAge(22, 21, 9, 48, 17));

// these allow us to specify an arbitrary amount of arguments, since, we operate on the array representation of the arguments, and by using an array method, we can
// perform manipulations on each element, no matter how many there are.
// Big difference between spread operator and rest operator is that spread operator is used in the function call, while the rest operator is used in the
// function declaration.