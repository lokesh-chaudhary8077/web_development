//constructor

// function Person(firstName,lastName,mail){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = mail;
// }
// Person.prototype.printName = function(){
//     console.log(`my name is ${this.firstName}  ${this.lastName}`)
// }
// Person.prototype.getName = function(){
//     return(`${this.firstName}  ${this.lastName}`)
// }
// let person1 = new Person('lokesh','chaudhary','lokeshchaudhary@gmail.com');
// console.log(person1);
// console.log(person1.email);
// console.log(person1.printName());
// console.log(person1.getName());

//class syntax

class Person{
    constructor(firstName,lastName,mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = mail; 
    }
    getName(){
        return(`${this.firstName}  ${this.lastName}`)
    }
    printName(){
        console.log(`my name is ${this.firstName}  ${this.lastName}`)
    }
}

class Student extends Person{
     constructor(firstName,lastName,mail,rollNo){
        super(firstName,lastName,mail);
        this.rollNo = rollNo; 
     }
     getName(){
        return(`super se uper ${this.firstName}  ${this.lastName}`)
     }
}
let student1 =  new Student('rohit','chaudhary','Rohitchaudhary@gmail.com',12)
console.log(student1);
console.log(student1.getName());
// let person1 = new Person('lokesh','chaudhary','lokeshchaudhary@gmail.com');
// console.log(person1);
// console.log(person1.email);
// console.log(person1.printName());
// console.log(person1.getName());