let titleEl = document.getElementById('title');
let listEl = document.getElementById('list')
let addButtonEl = document.getElementById('add-btn');

addButtonEl.addEventListener('click',function(){

    let titleText = titleEl.value;
    let li = document.createElement('li');

    li.innerText = titleText;

    listEl.appendChild(li);

    titleEl.value = ''; 

    li.addEventListener('click',function(){
        li.remove();
    })

})