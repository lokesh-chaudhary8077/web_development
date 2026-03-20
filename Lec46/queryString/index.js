const express = require('express'); //fun
const app = express(); //obj

app.get('/search',(req,res) => {
    console.log(req.query);
    console.log(req.query.search);
    let {search} = req.query;
    console.log(search);
})
app.listen(8080,() => {
    console.log('mera server chal gya at 8080')
})