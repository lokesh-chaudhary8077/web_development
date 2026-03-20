//adding a new todo
$('input').keypress(function(e){
    
    if(e.which === 13){
        const todoText = $(this).val();
        // console.log(todoText);
        $('#list').append(`<li> <span>x</span>${todoText}</li>`)
        $(this).val('');
    }
    
});

//mark as read
$('ul').on('click','li',function(){
$(this).toggleClass('complete');
})

//delete todo
$('ul').on('click','span',function(e){
    e.stopPropagation();  // to stop  event bubbling
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
})

//toggle input
$('#plus').click(function(){
    $('input').fadeToggle();
})
 