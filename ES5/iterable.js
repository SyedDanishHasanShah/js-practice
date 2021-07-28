var range = {
    start: 1, 
    end: 10,
    
}
// defining an iterable on an object requires us to include the following function. The key is the Symbol.iterator for this function.
// When for..of starts, this method is called ONCE. What this mehtod is required to do is to return an iterator (an object with the method next()).
// After starting the for..of object, then from onwards, the for..of works ONLY for that RETURNED OBJECT.
// When for..of wants the next value, it calls the next() function on that object.
// The result of next() (What it should return) must be of the form:
// {done: Boolean, value: any}
// If done === true, then the iteration is finished. Otherwise, the value is returned.
//
range[Symbol.iterator] = function() {
    return {
        current: this.start,
        last: this.end,
        
        next() {
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++,
                }
            }
            else {
                return {
                    done: true,
                }
            }
        }
    }
}

for (var num of range) {
    console.log(num);
}