function step1(fn){
    setTimeout(function(){
        console.log('selecting image');
        // return 'image';
        fn('image');
    }, 4000)
}

function step2(image,cb){
    setTimeout(function(){
        console.log(`applying filter to ${image} ko`);
        
        cb('filterImage');
    }, 2000)
}

function step3(filterImage,cb){
    setTimeout(function(){
        console.log(`badiya sa caption on ${filterImage} ko`);
       cb('filterImage'); 
    },3000)
}

function step4(final){
    setTimeout(function(){
        console.log(`${final} uploded`);
        
    }, 2000)
}




step1(function(image){
    step2(image,function(filterImage){
        step3(filterImage,function(finalImage){
            step4(finalImage);
        })
    });
})
