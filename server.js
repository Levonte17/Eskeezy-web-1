//DEPENDECIES
const express = require('express');
const mongoose = require('mongoose');

const methodOverride = require('method-override');
const productsRouter = require('./controllers/products');
const usersRouter = require('./controllers/users');
//INITIALIZE
const app = express();

//CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const db = mongoose.connection;

//CONNECT MONGOdb
mongoose.connect(DATABASE_URI);

//MONGOOSE CONNECTION LISTENER
db.on('connected', () => console.log('connected to mongoDB'));

//MIDDLEWARE
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('/public/css'));


// TO DO
app.use(productsRouter);
app.use(usersRouter);
//MAIN INDEX HOME
app.get('/', (req, res) => {
res.render('index.ejs')
});

//KUSTOMS INDEX
app.get('/kustoms', (req, res) => {
res.render('kustoms_index.ejs');
});
//SIGNUP INDEX
app.get('/login', (req, res) => {
res.render('login_index.ejs')
});


//Q&A INDEX
app.get('/questions', (req, res) => {
res.render('qa_index.ejs')
});

//PORTRAIT
app.get('/portraits', (req, res) => {
res.render('portriate.ejs')
});

//ABOUT
app.get('/about', (req, res) => {
res.render('about_index.ejs')
});

//SIGNUP
app.get('/signup', (req, res) => {
res.render('signup.ejs')
});
//LISTEN 
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT${PORT}`);
});