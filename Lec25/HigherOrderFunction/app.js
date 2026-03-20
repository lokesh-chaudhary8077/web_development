//condition  1
// function a(fn){
//     console.log('hi i am inside in A');
//     fn();
// }
// function b(){
//     console.log('hi i am inside in B');
// }
// a(b);


//condition  2
// function a(){
//     console.log('inside A');
//     function b(){
//         console.log('inside B');
//     }
//     return b;
// }
// let temp =  a();
// console.log(temp);

// function getstr(array){
//     let result = [];
//     for (let item of array){
//     if (typeof item === 'string'){
//         result.push(item);
//     }
//   }
//   return result;
// }
// function getboolean(array){
//   let result = [];
//   for (let item of array){
//     if (typeof item === 'boolean'){
//         result.push(item);
//     }
//   } 
//   return result; 
// }
// function getnum(array){
//     let result = [];
//     for (let item of array){
//     if (typeof item === 'number'){
//         result.push(item);
//     }
//   }
//   return result;
// }
// let arr = ['sam','Lokesh',true,false,10,20];
// console.log(getboolean(arr));
// console.log(getnum(arr));
// console.log(getstr(arr));


//HOF


function getboolean(item){
    return typeof item === 'boolean';
}
function getnum(item){
    return typeof item === 'number';
}
function getstr(item){
    return typeof item === 'string';
}

function get(array,fn){
    let result = [];
    for (let item of array){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}


let arr = ['sam','Lokesh',true,false,10,20];
console.log(get(arr,getboolean));
console.log(get(arr,getstr));
console.log(get(arr,getnum));