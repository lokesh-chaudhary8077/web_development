

let arr = [1,2,3,4,5];
console.log(arr);
let arr1 = [1,2,3,'lokesh','mohit'];
console.log(arr1);
console.log(arr1.length);
console.log(typeof(arr1));
console.log(typeof(arr1[2]));
let arr2 = [1,2,3,'lokesh','mohit',[1,2,3,'lokesh','mohit',[1,2,3,'lokesh','mohit']],'hi'];
console.log(arr2[5][4][0]);
let arr4 = [1,2,3,4,2,4];


//push (D)
 let a1 = arr4.push(5);
console.log(arr4);
console.log(a1);

//pop  (D)
let a2 = arr4.pop();
console.log(arr4);
console.log(a2);

//unshift  (D)
 let a3 = arr4.unshift(100);
console.log(arr4);
console.log(a3);
 
//shift  (D)
 let a4 = arr4.shift();
console.log(arr4);
console.log(a4);