let naam = document.createElement('div');
let fool = document.createElement('div');

let arti = document.getElementById('arti');

naam.innerText = 'hi i am lokesh'; 
fool.innerText = 'hi i am fool';


//---------------add in ending-------------
// arti.appendChild(naam);
// arti.appendChild(fool);

// arti.append(naam,fool) 


//---------------add in starting-----------
// arti.prepend(naam);
// arti.prepend(fool);
arti.prepend(naam,fool);