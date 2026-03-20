//used for making server
const express = require('express')  //function
const app = express()    // object


//adding app.use
app.use("/lokesh",(req,res) =>{
    // console.log(req);
    // console.log(res);
    res.status(404).send('Sorry, we cannot find that!')
    console.log('you made a request'); 
})
app.listen(8080,()=>{console.log('connected')})




