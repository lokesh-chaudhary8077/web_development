//--------------tag--------------
// console.log($('h1'));

//--------------class------------
// console.log($('.sam'));

//----------------id----------
// console.log($('#sam'));

//-----------manipulate elements--------
// css adding


// $('h1').css('color','red');
// $('h1').css('background-color','greenyellow');

// $('h1').css({
//     color: 'red',
//     backgroundColor: 'greenyellow'
// })


//--------------access text-----------
// console.log($('p').text());
// console.log($('p').text('hi i am lokesh chaudhary'));
// console.log($('p').text('hi i am <em>lokesh</em> chaudhary'));
// console.log($('p').html('hi i am <em>lokesh</em> chaudhary'));


//-----------manipulating attributes----------
// console.log($('a').text());
// console.log($('a').attr('href'));  //getter
// console.log($('a').attr('href','http://facebook.com'));  //setter


//selecting particular element
// $('h1:nth-of-type(4)').css('border','2px solid black');
// $('h1:first').css('border','2px solid plum');
// $('h1:last').css('border','2px solid plum');

// $('h1').first().css('border','2px solid plum');
// $('h1').last().css('border','2px solid plum');



//---------getting value of inputs----------
// console.log($('input').val());




//-----class manipulating---------

//--------addClass()------------
// $('h1').first().addClass('first');
// $('h1').first().addClass('first second third');

//--------removeClass()------------
// $('h1').first().removeClass('second');
// $('h1').first().removeClass('second third');

//--------toggleClass()------------
// $('h1').first().toggleClass('second');

//-----------hasClass()----------
// $('h1').first().hasClass('sam');



//---------events----------
//click
// $('button').click(function(){
//     console.log('hi i am lokesh chaudhary'); 
// })

// $('li').click(function(){
//     $(this).css('color','greenyellow');
// })


//-------------input---------
// $('input').keyup(function(){
//     console.log($(this).val());
// })


//---------addEventListener--> 'on'---------
// $('button').on(click,function(){
//     console.log('hi i am lokesh chaudhary'); 
// })

// $('input').keypress(function(e){
//     if(e.which == 13){
//     console.log($(this).val());
//     }
// })





























