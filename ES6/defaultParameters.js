const Person = function(firstName, lastName, age, nationality = 'Pakistani') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.nationality = nationality;
}

const danish = new Person('Danish', 'Shah', 22); // no nationality supplied

console.log(danish); // yet, nationality is printed as 'Pakistani', 'cause it was the default value.


const tyrion = new Person("Tyrion", 'Lannister', 27, "Westerosi");

console.log(tyrion); // the supplied argument has overwritten the default one.