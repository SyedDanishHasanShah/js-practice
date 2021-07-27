function canDrive(birthYear) {
    var age = new Date().getFullYear() - birthYear; 
    if (age > 18) {
        var string = "You are old enough to drive!";
    }
    else {
        var string = "You are not old enough to drive!"; // var variables are function scoped, so even though string was declared in the if block, it is accessible
        // in the else block abd outside.
    }
    return string;
}
console.log(canDrive(2005));

// function canDriveTwo(birthYear) {
//     let age = new Date().getFullYear() - birthYear; 
//     if (age > 18) {
//         let string = "You are old enough to drive!";
//     }
//     else {
//         let string = "You are not old enough to drive!"; // var variables are function scoped, so even though string was declared in the if block, it is accessible
//         // in the else block.
//     }
//     return string;
// }

// console.log(canDriveTwo(1998)); 

// Will not work when declared through let.