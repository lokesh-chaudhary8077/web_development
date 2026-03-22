const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser(" mysecretkey")); // Use a secret key for signed cookies

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.get('/setcookie', (req, res) => {
    res.cookie('username', 'JohnDoe', { maxAge: 900000, httpOnly: true });
    res.cookie('location', 'New York', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set!');
});

app.get('/getcookie', (req, res) => {
    let {username, location} = req.cookies;
    res.send(`Cookie values: ${username}, ${location}`);
});

app.listen(8080, ()=> console.log('Server is running on port 8080'));
