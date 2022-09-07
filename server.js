//DEPENDECIES
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product')
//const methodOverride = require('method-override');
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
//app.use(methodOverride('_method'));

//POST ROUTE
app.post('/product', (req, res) => {
    promise = Product.create(req.body);
promise.then((createdProduct) => {

res.send(createdProduct);
    });
});
//LISTEN 
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT${PORT}`);
});