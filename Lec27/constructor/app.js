// function fun(){
     
// }
// let namm = fun();
// console.log(namm);


// function user(){
//     this.username = 'lokesh';
//     this.email = 'lokesg@gmail.com;' 
// }
// let user1 = new user();
// console.log(user1);


function user(user,mail){
    this.username = 'user';
    this.email = 'mail'; 
    // this.description = function(){
    //     return `my name is ${this.username}`
    // }
}
user.prototype.description = function(){
    return `my name is ${this.username}`
}
let user1 = new user('lokesh','lokesh.chaudhary@gmail.com');
let user2 = new user('rohit','rohit.chaudhary@gmail.com');
console.log(user1);
console.log(user1.description());
console.log(user2);
console.log(user2.description());