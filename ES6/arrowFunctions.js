const years = [1990, 1965, 1982, 1937];

// ES5

agesES5 = years.map(function(el) {
    return new Date().getFullYear() - el;
});

console.log(agesES5);

// ES6
// Arrow functions are another way of writing functions. the syntax is:
// () => {};  for no arguments
// if there is only one argument, you do not need to specify the parentheses in the start
// argOne => {};
// For zero or multiple arguments, we need the parentheses
// If the arrow function is only returning something, then you do not need to write the square brackets and the return keyword
// If the arrow function consists of more than one line of code, then square brackets are needed. The return keyword is also not implicit in such a case.
// Arrow functions do not have their own 'this' keyword. They have a lexical 'this', meaning that they inherit the 'this' of the nearmost outside scope.
agesES6 = years.map(el => new Date().getFullYear() - el);


const myFunction = (myName, myAge) => `I am ${myName}, and I am ${myAge} years old.`;

console.log(myFunction("Danish", 22));

// Lexical scoping

var Person = function(name) {
    this.name = name;
}

Person.prototype.printMyFriendsES5 = function(friends) {
    var self = this;
    // use self.name in the callback
    var myFriends = friends.map(function(el) {
        return this.name + " is friends with " + el + "."; // The this here points to the global object instead of to the Person object.
    }.bind(this));
    console.log(myFriends);
}

// Because the callback function has its own this keyword, and since it is a regular function call, not a method call, it is associated with the global object.
// When we use this inside the callback, we get undefined for this.name, since the global object has no proprety name.
// One way to rectify this whilst remain within the constraints of ES5 is to use bind and explicitly state the this keyword.
// Since we are using bind outside the scope of the callback, here, the this keyword points to the Person object.
// Another way is to preserve the this keyword inside another variable, and use that variable inside the callback.

friends = ['Jon', 'Robb', 'Theon'];

var bran = new Person('Bran');
bran.printMyFriendsES5(friends);

// However, in ES6, since the arrow functions have a lexical this, they will simply use the 'this' of the surrounding function, i.e., the Person object,
// and we won't have to resort to hacky workarounds.

Person.prototype.printMyFriendsES6 = function(friends) {
    var myFriends = friends.map(el => {
        return `${this.name} is friends with ${el}.`;
    })
    console.log(myFriends);
};

bran.printMyFriendsES6(friends);