const express = require('express')  //function
const app = express() ;


//get 


app.get('/',(req,res)=>{
    res.send("<h3> ye mera '/' path hai</h3>")
})

app.get('/cat',(req,res)=>{
    res.send("<h3> ye mera '/cat' path hai</h3>")
})
app.get('/dog',(req,res)=>{
    res.send("<h3> ye mera '/dog' path hai</h3>")
})

// bad request ko handle
app.use((req, res) => {
    res.send("you hit a bad request try something else");
});


app.listen(8080,()=>{
    console.log("server connect at port 8080");
})