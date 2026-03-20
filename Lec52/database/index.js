const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(() => {
    console.log("Db connected successfully")})
.catch(() => {
    console.log("Db not connected successfully")
    console.log(err);
})
