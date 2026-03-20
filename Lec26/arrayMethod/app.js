//forEach

// let student = ['ram','shyam','rohit','akash','kana'];
// student.forEach(function(name){
// console.log(name);
// })  



// let student = ['ram','shyam','rohit','akash','kana'];
// student.forEach(function(name,idx){
// console.log(`index is ${idx} name is ${name}`);
// })



//map()

// let marks = [20,30,40,37,73,54,65,82,48];
// let newMarks = marks.map(function(items,idx){
//     return [items * 2,idx];
// })
// console.log(marks);
// console.log(newMarks);


//filter

// let marks = [1,2,3,4,5,6,7,8,9];
// let filterArr = marks.filter(function(item,index){
//     if(item >= 5){
//      console.log(index);
//         return true;
//     }
//     return false;
// })
// console.log(marks);
// console.log(filterArr);


//sort()

let arr = [12,34,2,76,94,75,43,4,37];
let newArr = arr.sort(function(a,b){
    return a-b; //asc
    // return b-a; //desc
});
console.log(newArr);