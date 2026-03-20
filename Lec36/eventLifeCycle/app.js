let grandParent = document.getElementById('grandParent');
let Parent = document.getElementById('Parent');
let Child = document.getElementById('Child');

// grandParent.addEventListener('click',()=>{
//     console.log('grandFather clicked !!')
// },true)
// Parent.addEventListener('click',()=>{
//     console.log('Parent clicked !!')
// },true)
// Child.addEventListener('click',()=>{
//     console.log('child clicked !!')
// },true)

grandParent.addEventListener('click',(event)=>{
    console.log('grandFather clicked !!')
},true)
Parent.addEventListener('click',(event)=>{
    event.stopImmediatePropagation();
    console.log('Parent clicked !!')
},true)
Child.addEventListener('click',(event)=>{
    console.log('child clicked !!')
},true)