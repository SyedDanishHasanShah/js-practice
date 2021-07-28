function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

console.log(addFourNumbers(2, 3, 4, 5));

// writing these numbers individually is a bit cumbersome. We can use an array to store these numbers, and then pass the array as the argument after spreading it.


const array = [24, 3, 12, 43];

console.log(addFourNumbers(...array));


// We can also use the spread operator to join two arrays into one array.

const starks = ['Robb', 'Bran', 'Arya', 'Rickon'];

const targaryens = ['Daenerys', 'Rhaegar', 'Viserys'];

const starksAndTargaryens = [...starks, 'Jon', ...targaryens];

console.log(starksAndTargaryens);