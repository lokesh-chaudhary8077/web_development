

const express = require('express'); //fun
const app = express(); //obj
const path = require('path');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extended:true})) //middleware to get the form data
app.use(express.json());
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/user',(req,res)=>{
    res.send('post method')
})
 
app.get('/user',(req,res)=>{
    let {username ,age} = req.query;
    res.send('get request sent successfully')
})
app.listen(8080,() => {
    console.log('server connected at port 8080'); 
})

