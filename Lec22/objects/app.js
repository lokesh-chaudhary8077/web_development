let person = {
    name : 'lokesh chaudhary',
    age : 19,
    color : 'red'
}

// console.log(person);
// console.log(person.name);
// console.log(person['age']);

let person1 = person;
person.name = "Rahul";
console.log(person1);
console.log(person1.name);
console.log(person1['age']);