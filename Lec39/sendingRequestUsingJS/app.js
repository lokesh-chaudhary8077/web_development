let ul = document.querySelector('ul');

//XMLHttpsRequest methods 1
let req = new XMLHttpRequest();

//connection bana hai
req.open('GET','https://inshorts.deta.dev/news?category=science');
// req.open('GET','https://inshorts.deta.dev/news?category=entertainment');

// bhejni hai apni request/demand
req.send();

//jab sahi data mile or saara kaam sahi se hojaae
req.onload = function(){
    // console.log(this,'sam');
    let samachaar = JSON.parse(this.response);
    // console.log(samachaar); 
    for(let d of samachaar.data){
        let li = document.createElement('li');
        li.innerHTML = `
        <img src=${d.imageUrl} height="100px" />
        <span>${d.title}</span>
        `
        ul.appendChild (li);
    } 
}
req.onerror = function(){
    console.log(this);
}















