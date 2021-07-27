objPerson = {
    'name': 'Danish',
    'age': '22',
}

function changeAge(obj) {
    obj.age = 50;
    console.log(obj);
}

console.log(objPerson);

changeAge(objPerson);

console.log(objPerson); // the age has been changed in the global scope too. This is because the object was passed by reference. Instead of creating a 
// copy of the object (that would be computationally and memory-wise expensive), the address of the original object was passed into the function. Thus, 
// the function manipulated the original object.
