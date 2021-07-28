// Now that we have block-scoping, we do not have to use the complex IIFE structure to achieve data privacy. We can simply write anything that we don't want
// exposed to the global scope in a block. (Declared with let and const, obviously, since var is function scoped, and thus will be available outside.)

// ES5

(
    function() {
        var a = 5;
        console.log(a);
    }
)();

// console.log(a); get an error 

// ES6

{
    let b = 5;
    console.log(b);
}

// console.log(b); get an error.