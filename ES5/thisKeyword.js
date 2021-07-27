console.log(this); // prints {} using node, since the global scope of a module is the module itself. When executed on a browser, it will print the Window object.

function tryingThis() {
    console.log(this); // will print the global object, since it is a regular function call.
}

tryingThis();


let obj = {
    firstName: 'Danish',
    getFirstName: function() {
        console.log(this); // will print the object, since it is calling this method.
        
        function anotherFunction() {
            console.log(this); // will print the global object, since this is not a method call, but a regular function call.
        }
        anotherFunction();
    }
}


obj.getFirstName(); 

let objTwo = {
    name: 'Jon',
}

objTwo.getFirstName = obj.getFirstName;

objTwo.getFirstName(); // now, this will point to objTwo, since it is the one calling the method.