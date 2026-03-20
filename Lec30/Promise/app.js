//promise

// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let data = "hi i am lokesh chaudhary";
//         resolve(data);
//         let err = 'oops dikkat aayi';
//         reject(err);
//     },3000);
// });
// promise.then(function(data){
//     console.log(data)
// }).catch(function(err){
//       console.log(err);
// });


// let p1 = new Promise((resolve,reject) =>{
//     console.log("3sec ka wait");
//     setTimeout(() => {
//     resolve();
//     },3000);
// });

// // p1.then().catch();
// p1.then(() => {
//     console.log('work done');
// })
// .catch(() =>{
//     console.log("Error");
// });


//.then() chaining

let p1 = new Promise((resolve,reject) =>{
    console.log("3sec ka wait");
    setTimeout(() => {
    resolve();
    },3000);
});

p1.then(() => {
    return new Promise((resolve,reject) => {
        console.log("promis run kar diya");
        setTimeout(() => {
            console.log('2 sec wait');
            resolve();
        },2000);
    })
})
.then(() => {
   console.log("dono kaam ho gye mere"); 
})













