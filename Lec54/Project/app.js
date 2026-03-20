const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product');
const ejsMate = require('ejs-mate');


mongoose.connect('mongodb://127.0.0.1:27017/shopping')
.then(() =>{
    console.log("DB connected successfully")
})
.catch((err) => {
    console.log("DB error");
    console.log(first);
})

app.engine('ejs',ejsMate);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views')) //views folder 
app.use(express.static(path.join(__dirname,'public'))) //public folder
app.use(express.urlencoded({extended:true}))

//seeding database
// seedDB()

app.use(productRoutes); // so rhat harr incoming request ke

app.listen(8080, () => {
    console.log("server connected at port 8080")
})