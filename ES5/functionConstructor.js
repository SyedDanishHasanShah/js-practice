var Person = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

Person.prototype.getAge = function() {
    this.age = new Date().getFullYear() - this.birthYear;
}
// using prototype, each new object created with Person will have access to the same function. If we were to define the function like the properties, inside the
// function, and not the prototype, then there would be multiple copies of the function, which is redundant. We need the function to be shared. However, the 
// properties must belong to each object individually, so that is why they are not included in the prototype. 
var danish = new Person('Danish', 1998, 'Software Developer');
danish.getAge();
console.log(danish.age);

var jonSnow = new Person('Jon', 1995, 'Night\'s Watch Ranger');
jonSnow.getAge();
console.log(jonSnow.age);

// when we use the new keyword, a brand new, empty object is created. Then, the constructor function, (Person), is called, with the arguments specified.
// Calling a function creates a new execution context, with a this variable. In a regular function call, the 'this' keyword points to the global object.
// but, we don't want to set the properties (name, birthYear, job) on the global object. Rather, we want a new object. So, for that, we use the new keyword. Now,
// the 'this' keyword points to the empty object that was created, instead of the global object. Then, all of this is assigned to the danish variable.
// The Person constructor can be thought of as a blueprint, using which, we can create many different objects.  It is the same as classes in other languages.
// (also in ES6)