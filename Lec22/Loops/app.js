// //for loop
// for(let i = 0;i <= 5;i++){
//     for(let j = 0;j <= 5;j++){
//         if (i == j){
//         break;
//         }
//         console.log(i,j);
//     }
// }


// //while
// let num = 100;
// while(num > 0){
//     console.log(num);
//     num = num - 10;
// }


// //for-in(objects)
// let person ={
//     name : 'Lokesh',
//     age : 27,
//     isMale : true
// }

// for (let items in person){
//     console.log(`${items} --> ${person[items]}`);
// }

//for-of (arrays,maps,lists,vector)
let array = ['lokesh','hardik','shayam','rohit'];
for (let items of array){
    console.log(items)
}
