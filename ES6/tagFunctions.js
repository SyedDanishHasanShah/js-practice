let name = 'Danish';
let job = 'Software Developer';

function greet(array, name, job) {
    console.log(`${array[0]}${name}${array[1]}${job}${array[2]}`);
}

greet`Yes, ${name} is a ${job}!`;