
// unlimited generator
function* idMaker() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

let generator = idMaker();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// limited generator
function* limitedGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let generatorTwo = limitedGenerator();

console.log(generatorTwo.next().value); // 1
console.log(generatorTwo.next().value); // 2
console.log(generatorTwo.next().value); // 3
console.log(generatorTwo.next().value); // undefined

// yielding to another generator

function* innerGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* outerGenerator(i) {
    yield i;
    yield* innerGenerator(i);
    yield i + 10;
} 

let generatorThree = outerGenerator(10);

console.log(generatorThree.next().value); // 10
console.log(generatorThree.next().value); // 11
console.log(generatorThree.next().value); // 12
console.log(generatorThree.next().value); // 13
console.log(generatorThree.next().value); // 20
console.log(generatorThree.next().value); // undefined

// Passing arguments into generator.next()

function* logGenerator() {
    console.log(0);
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
}

let generatorFour = logGenerator();

generatorFour.next();
generatorFour.next('Hello');
generatorFour.next('how');
generatorFour.next('are you?');

// return keyword in generators

function* yieldAndReturn() {
    yield 'Y';
    return 'R';
    yield 'unreachable';
}

let generatorFive = yieldAndReturn();

console.log(generatorFive.next());
console.log(generatorFive.next());
console.log(generatorFive.next());

// generator as an object property.

const someObject = {
    propertyOne: 'valueOne',
    *generator() {
        yield 'a';
        yield 'b';
    }
}

let generatorSix = someObject.generator();

console.log(generatorSix.next());
console.log(generatorSix.next());
console.log(generatorSix.next());

// Generator practical example

function* powers(n) {

    for (let current = n; ; current = current * n) {
        yield current;
    }
}

let powerGenerator = powers(2);

console.log(powerGenerator.next());
console.log(powerGenerator.next());
console.log(powerGenerator.next());
console.log(powerGenerator.next());
console.log(powerGenerator.next());
console.log(powerGenerator.next());

// for (let power of powers(4)) {
//     if (power > 32) {
//         break;
//     }
//     console.log(power); // dont have to use next
        // with for of syntax
// }