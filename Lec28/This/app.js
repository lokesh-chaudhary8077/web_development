// 1. regular invocation
// function fun(){
//     console.log(this);
// }
// fun();


// 2. method invocation
// let obj = {
//     number : 2,
//     fn : function(){
//       console.log(this);  
//     }
// }
// obj.fn(); 


//question
// let obj = {
//     number : 2,
//     fn : function(){
//       console.log(this);  
//     }
// }
// let myFun = obj.fn; 
// myFun();


//question
// let obj2 = {
//     fn : function(){
//         function calculate(){
//             console.log(this);
//         }
//         calculate();
//     }
// }
// obj2.fn(); 


//3. constructor function calling
//  function CreateObj(){
//     this.x = 20;
//  }
// let obj = new CreateObj();
// console.log(obj);
// console.log(obj.x);


// 4. .call() , .apply() , .blind() 
// let obj  = {
//     a : 20,
//     fn: function(a,b,c){
//         console.log(this,a,b,c);
//     }
// }  
// let obj2 ={
//     a : 50
// } 
// // obj.fn();   
// // obj.fn.call(obj1,1,2,3);
// obj.fn.apply(obj1,[5,6,7]);



// 5. .blind()
let obj3 = {
    fn : function(){
        console.log(this); 
    }
}
let myFun = obj3.fn.bind(obj3);
myFun();
