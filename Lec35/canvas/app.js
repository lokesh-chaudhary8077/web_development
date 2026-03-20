let canvas = document.querySelector("canvas");
//brush == context
let ctx = canvas.getContext('2d');

// //fill the red color
// ctx.fillStyle = 'red';

// // ctx.fillRect(100,200,100,60);

// ctx.strokeStyle = 'green';

// ctx.strokeRect(100,200,100,60);


//-----------------path-----------

// ctx.beginPath();
// ctx.moveTo(410,40);
// ctx.lineTo(100,120);
// ctx.lineTo(300,220);
// ctx.lineTo(50,60);
// ctx.stroke();

//---------------triangle---------

// ctx.beginPath();
// ctx.moveTo(100,100);
// ctx.lineTo(150,150);
// ctx.lineTo(50,100);
// ctx.lineTo(100,100);
// ctx.stroke();
// ctx.closePath();

//--------------drawing text------------

ctx.font='28px monospace'
ctx.fillStyle = 'green'
ctx.fillText("Lokesh",100,100);