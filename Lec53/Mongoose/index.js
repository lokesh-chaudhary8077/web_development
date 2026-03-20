const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(() => {
    console.log("Db connected successfully")})
.catch(() => {
    console.log("Db not connected successfully")
    console.log(err);
})

//schema
 const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    year : Number 

})

//models (js class)

const Movie = mongoose.model('Movie',movieSchema);
 let ironman = new Movie({
    name: "Ironman",
    rating:8 ,
    year:2015,
    isWatched:true
})
ironman.save();




