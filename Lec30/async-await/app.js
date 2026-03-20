// function some(){
//
// }
// console.log(some());
//return undefined


// let p1 = new function(){
//
// }
// console.log(p1);
//return an empty object


// async function some(){
//
// }
// console.log(some());
//return promise


async function some(){
    await new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("after 3 sec");
        resolve();
    },3000)
})
    new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("2sec done");
            resolve();
        },2000)
    })
    console.log("2 kaam done");
}
some();

