// methods 2
// using fetch for calling an api

fetch('https://newsapi.org/v2/top-headlines?category=science&apiKey=YOUR_API_KEY')
    .then(function(response){
        // console.log(response)
        return response.json();
    })
    .then (function(data){
    console.log(data);
    })
    .catch(function(err){
        console.log(err)
        
    })