

axios.get('https://newsapi.org/v2/top-headlines?category=science&apiKey=YOUR_API_KEY')
    .then(function(resp){
        console.log(resp.data)
    })
    .catch(function(err){
        console.log(err);
    });











