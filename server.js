//DEPENDECIES
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product')
const methodOverride = require('method-override');
//const productsRouter = require('./controllers/products');
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

//HOME REDIRECT
app.get('/', (req, res) => res.redirect('/product'));

//SEED
app.get('/product.seed', (req, res) => {
    const data = require('./data.json');
//Delete Many
    Product.deleteMany({}, (err, result) => {
    //Insert Many
        Product.insertMany(data, (err, result) => {
            res.redirect('/product');
        });
    });
});
                    //INDUCES
//INDEX
app.get('/product', (req, res) => {
Product.find({}, (err, product) => {
    res.render('index.ejs', {
        product: product
        });
    });
});
/*
app.get('/product', (req, res) => {
    Product.find({category: "shirt"}, (err, product) => {
res.render('index.ejs');
         });
    });
    */

    //NEW
app.get('/product/new', (req, res) => {
    res.render('new.ejs');
    });

    //DELETE
app.delete('/product/:id', (req, res) => {
Product.findByIdAndDelete(req.params.id,(err, deletedProduct) => {
res.redirect('/product');
    });
});

//UPDATE
app.put('/product/:id', (req, res) => {
Product.findByIdAndUpdate(req.params.id, req.body,
    {new: true}, (err, previousProductObject) => {

res.redirect('/product/' + req.params.id);
    });
});

//CREATE
app.post('/product', (req, res) => {
    console.log(req.body)
    Product.create(req.body, (err, createdProduct) => {
        console.log(err)
        res.redirect('/product');
    });

});

//EDIT
app.get('/product/:id/edit', (req, res) => {
Product.findById(req.params.id, (err, Product) => {
res.render('edit.ejs', { Product });
    });
});
//SHOW
app.get('/product/:id', (req, res) => {
Product.findById(req.params.id, (err, Product) => {
res.render('show.ejs', { Product });
    });
});
//LISTEN 
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT${PORT}`);
});