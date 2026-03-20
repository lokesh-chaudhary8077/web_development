// let product = document.querySelectorAll('section figure')
// console.log(product);

// for(let item of product){
//     item.addEventListener('click',function(){
//         console.log(this,innerText);
//     })
// }

//---------------eventDelegation---------

let product = document.querySelectorAll('section')
Selection.addEventListener('click',function(e){
    // console.log(e);
    if(e.target.nodeName === 'FIGURE'){
    console.log(e.target.innerText);
    }
})


   
















