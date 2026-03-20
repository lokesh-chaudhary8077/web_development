

const express = require('express'); //fun
const app = express(); //obj
const path = require('path');
const methodOverride = require('method-override');
const {v4 : uuid} = require('uuid');



let comments =[
    {
        id:uuid(),
        username:"Lokesh",
        comment:"kuch nhi"
    },
    {
        id:uuid(),
        username:"Sachin",
        comment:"kaun"
    },
    {
        id:uuid(),
        username:"Ram",
        comment:"laal hai"
    },
    {
        id:uuid(),
        username:"shyam",
        comment:"nhi"
    }
]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))  //method-overding for post to patch



//root
app.get('/',(req,res)=>{
    res.send('root mei aapka swagat hai')
})


//task1
app.get('/blogs',(req,res) => {
    res.render('index',{comments})
})


//task2

app.get('/blogs/new',(req,res) =>{
    res.render('new')
})


//task3
app.post('/blogs',(req,res) =>{
    let {username , comment}=req.body;
    comments.push({
        username,
        comment,
        id: uuid()});
    res.redirect('/blogs');
})

//task4
app.get('/blogs/:id',(req,res) => {
    let {id} = req.params;
    let foundComment = comments.find( comment => comment.id === id)
    res.render('shows',{foundComment});

})

//task5
app.get('/blogs/:id/edit', (req,res) =>{
    let {id} = req.params;
    let foundComment = comments.find( comment => comment.id === id)
    res.render('edit',{foundComment});
})

//task6
app.patch('/blogs/:id',(req,res) => {
    let {id}= req.params;
    let foundComment = comments.find( comment => comment.id === id)
    let {comment} = req.body;
    foundComment.comment = comment; 
    res.redirect('/blogs');
})

//task7

app.delete('/blogs/:id',(req,res) => {
    let {id} = req.params;
    let newArray = comments.filter((comment) =>{return comment.id != id})
    comments = newArray;
    res.redirect('/blogs');
})
app.listen(8080,() => {
    console.log('server connected at port 8080'); 
})

