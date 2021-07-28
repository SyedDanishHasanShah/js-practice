// provides syntactic sugar for function constructors. 

class Person {
    constructor(name, birthYear, job) {
        this.name = name;
        this.birthYear = birthYear;
        this.job = job;
    }

    getAge() {
        this.age =  new Date().getFullYear() - this.birthYear;
        return this.age;
    } // this also gets added to the prototype, just as we do with function constructors. We just don't have to add it manually now. And we can do it inside
    // the class, which makes it nicely structured.
}
// class definitions are NOT HOISTED, unlike function declarations. So, we first need to declare and define them, and only then can we start using them.
const danish = new Person('Danish', 1998, 'Software Developer');

console.log(danish.getAge());

// SUBCLASSES WITH ES5


// SUPERCLASS Person
var PersonES5 = function(name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

PersonES5.prototype.getAge = function() {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
}

// SUBCLASS Athlete

var AthleteES5 = function(name, birthYear, job, olympicGames, medals) {
    PersonES5.call(this, name, birthYear, job); // when the new object is created with new, we want it to point to an AthleteES5 object, so that is why we are
    // passing the this keyword from this context. This is like calling super()

    this.olympicGames = olympicGames;
    this.medals = medals;
} 

// Now, we have to connect the prototype of AthleteES5 with PersonES5, to preserve the prototype chain.
AthleteES5.prototype = Object.create(PersonES5.prototype);

var john = new AthleteES5('John', 1990, 'sprinter', 2018, '4');

console.log(john.getAge()); // accessible through prototype chain


// SUBCLASSES IN ES6

class PersonES6 {
    constructor(name, birthYear, job) {
        this.name = name;
        this.birthYear = birthYear;
        this.job = job;
    }

    getAge() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    }
}

let mike = new PersonES6('Mike', 1984, 'electrician');

console.log(mike.getAge());

class AthleteES6 extends PersonES6 {
    constructor(name, birthYear, job, olympicGames, medals) {
        super(name, birthYear, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        return this.medals;
    }
}

let ali = new AthleteES6('Ali', 1991, 'swimmer', 2021, 2);

console.log(ali.getAge());

console.log(ali.wonMedal());