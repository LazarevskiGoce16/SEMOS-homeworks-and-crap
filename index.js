const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const pages = require('./handlers/pages');
const callbacks = require('./handlers/callbacks')

const dsn = 'mongodb+srv://<username>:<password>@cluster0.7cvxefc.mongodb.net/baza1?retryWrites=true&w=majority';

mongoose.connect(
    dsn,
    err => {
        if(err) return console.log(err);
        console.log("Successfully connected to DB!");
    }
);

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', pages.main);
app.get('/blogpost/:id', pages.singleBlogpost);
app.get('/form', pages.formAdd);
app.get('/form/:id', pages.formEdit);
app.get('/form/remove/:id', pages.formRemove);

app.post('/callback/post', callbacks.create);
app.post('/callback/post/:id', callbacks.edit);
app.post('/callback/remove/:id', callbacks.remove);

app.listen(10000, err => {
    if(err) return console.log(err);
    console.log("Server successfully started on port 10000!");
});
