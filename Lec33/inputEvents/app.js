


// let im = document.querySelector('input');
// function fun(event){
//     console.log(event.target.value );
// }
// im.addEventListener('input',fun)



let im = document.querySelector('input');
let h2 = document.querySelector('h2');
function fun(event){
    h2.innerText = event.target.value;
}
im.addEventListener('input',fun)