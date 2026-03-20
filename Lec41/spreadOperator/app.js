// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70];

//concat
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

//spread operator 

//array
// arr2 = [...arr1,50,60,70];
// arr1 = [10,20,30,40,...arr2];
// console.log(arr2);
// console.log(arr1);

//object
// let obj1 = {
//     l:10,
//     m:'sam',
//     n: 'live class'
// }
// let obj2 = {
//     ...obj1,
//     age: 27
// }
// console.log(obj2);
// console.log(obj1);
// delete obj1.m;
// console.log(obj1);


//ques
console.log(Math.min(0,1,2,3,4,5,6,7,8,9));//0
console.log(Math.max(0,1,2,3,4,5,6,7,8,9));//9

let nums = [0,1,2,3,4,5,6,7,8,9];
console.log(Math.min(...nums));
console.log(Math.max(...nums));
