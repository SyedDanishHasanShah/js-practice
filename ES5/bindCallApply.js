var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ", ladies and gentlemen! I'm " + this.name + ", I'm a " + this.job + ", and I'm " + this.age + " years old!");
        }
        else if (style === 'friendly') {
            console.log("Hey, what's up? I'm " + this.name + ", I'm a " + this.job + ", and I'm " + this.age + " years old! Have a nice " + timeOfDay + "!");
        }
    }
}

var emily = {
    name: 'Emily',
    age: '36',
    job: 'designer',
}

// suppose we want to use the presentation method for emily, which currently does not have one. We can use the call method for this.

john.presentation.call(emily, 'friendly', 'evening');

// First argument is the this variable, we have set it to emily. So, now, the this in the presentation method of john will point to the emily object.
// This is called method borrowing, because we have borrowed a method from john.

// another way to do this is through the apply method. Only difference is that apply accepts the function arguments (except the this variable)
// in the form of an array

john.presentation.apply(emily, ['formal', 'afternoon']);

// the last method is the bind method. Like all the other methods, it allows us to assign the this variable explicitly. The difference is that bind does not
// immediately call the function. Instead, it returns a copy of the function and allows us to store it somewhere for later. This is sometimes extremely useful
// having a function with preset arguments.

var emilyFriendlyMorning = john.presentation.bind(emily, 'friendly', 'morning');

emilyFriendlyMorning();

// we are not even required to pass all the arguments at once. We can pass a subset of them, and the pass the remaining arguments whenever we actually want to 
// call the function.

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('night');

// Thus, along with allowing us to explicitly set the 'this' variable, bind also allows us to preset some function arguments.

// This technique is called currying. In this, we create a function based on another function, but with some preset parameters.