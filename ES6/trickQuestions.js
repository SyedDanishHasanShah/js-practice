// (function(){
//     var a = b = 5;
// })();

// console.log(b); // b gets declared in the global scope.

// String.prototype.repeatify = String.prototype.repeatify || function(n) {
//     let string = '';
    
//     for (let i = 0; i < n; i++) {
//         string += this;
//     }

//     return string;
// } 

// console.log('hello'.repeatify(5));


// // hoisting
// function testOne() {
//     console.log(a);
//     console.log(foo());
    
//     var a = 1;
//     function foo() {
//        return 2;
//     }
// }
 
// testOne();



// var fullName = 'Jon Snow';

// var outerObject = {
//     fullName: 'Rhaegar Targaryen',

//     innerObject: {
//         fullName: 'Theon Greyjoy',

//         getFullName: function() {
//             return this.fullName;
//         }
//     },

//     getFullName: function() {
//         return this.fullName;
//     }
// }

// console.log(fullName); // Jon Snow

// console.log(outerObject.getFullName()); // Rhaegar Targaryen

// console.log(outerObject.innerObject.getFullName()); // Theon Greyjoy

// var testing = outerObject.innerObject.getFullName.bind(outerObject);

// console.log(testing());

// let objectOne = {
//     name: 'Danish',
//     age: 22,
// }

// let objectTwo = {
//     name: 'Danish',
//     age: 22,
// }

// console.log(`objectOne == objectTwo: ${objectOne == objectTwo}`);
// console.log(`objectOne === objectTwo: ${objectOne === objectTwo}`);

// objectOne = objectTwo;

// console.log(`objectOne == objectTwo: ${objectOne == objectTwo}`);
// console.log(`objectOne === objectTwo: ${objectOne === objectTwo}`);

// console.log([] === true)

let objectOne = {
    firstName: 'Danish',

    getFirstName: () => this.firstName,

    printGreeting: function() {
        return `Hello, I am ${this.firstName}`;
    }
}

console.log(objectOne.firstName);
console.log(objectOne.getFirstName());
console.log(objectOne.printGreeting());