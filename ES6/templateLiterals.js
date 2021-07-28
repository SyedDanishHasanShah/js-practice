let danish = {
    name: 'Danish',
    age: '22',
    job: 'Software Developer',

    printIntroduction: function() {
        const myIntro = `Hello, I'm ${this.name}. I'm ${this.age} years old, and I'm a ${this.job}! It is very nice to meet you!`;
        console.log(myIntro);
    }
};

danish.printIntroduction();