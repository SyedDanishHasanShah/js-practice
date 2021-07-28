const ages = [1998, 1995, 1989, 1985];
const [ageOne, ageTwo, ageThree, agefour] = ages;

console.log(ageOne);

console.log(ageThree);


const danish = {
    firstName: 'Danish',
    lastName: 'Shah',
    age: '22',
};

const { firstName, lastName } = danish; // variable names must match the key names we want to extract.

console.log(`${firstName} ${lastName}`);

// however, we can also use different names, as opposed to keeping the same identifiers as the keys. 

const {firstName: fName, lastName: lName} = danish;

console.log(`${fName} ${lName}`);

// A practical application of this includes returning multiple values from a function.

function returnTwoValues() {
    return [2, 5];
}

const [numOne, numTwo] = returnTwoValues();

console.log(`${numOne} ${numTwo}`);