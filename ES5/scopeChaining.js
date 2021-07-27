let varOne = 'interesting';

function foo() {
    var varTwo = 'tremendous';
    bar();
    function bar() {
        var varThree = 'supercalifragilisticexpialidocious';
        console.log(varOne + varTwo + varThree);
    }
}

foo();

// function bar has access to the variables defined in the parent scopes. This is due to scope chaining. Each execution context possesses its own scope chain, to 
// keep track of the variables that are accessible by the function of that execution stack.

// Call stack is the order in which functions are called, while the scope chain is the order in which functions are written. (Lexical order)