//CONTROLLER DEPENDENCIES
const express = require('express');
const router = express.Router();
const Product = require('../models/product')

//HOME REDIRECT
router.get('/', (req, res) => res.redirect('/product'));

//SEED
router.get('/product.seed', (req, res) => {
    const data = require('../data.json');
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
router.get('/product', (req, res) => {
Product.find({}, (err, product) => {
    res.render('index.ejs', {
        product: product
        });
    });
});

/*
router.get('/product', (req, res) => {
    Product.find({category: "shirt"}, (err, product) => {
res.render('index.ejs');
         });
    });
*/

    //NEW
router.get('/product/new', (req, res) => {
    res.render('new.ejs');
    });

    //DELETE
router.delete('/product/:id', (req, res) => {
Product.findByIdAndDelete(req.params.id,(err, deletedProduct) => {
res.redirect('/product');
    });
});

//UPDATE
router.put('/product/:id', (req, res) => {
Product.findByIdAndUpdate(req.params.id, req.body,
    {new: true}, (err, previousProductObject) => {

res.redirect('/product/' + req.params.id);
    });
});

//CREATE
router.post('/product', (req, res) => {
    console.log(req.body)
    Product.create(req.body, (err, createdProduct) => {
        console.log(err)
        res.redirect('/product');
    });

});


//EDIT
router.get('/product/:id/edit', (req, res) => {
Product.findById(req.params.id, (err, Product) => {
res.render('edit.ejs', { Product });
    });
});


//SHOW
router.get('/product/:id', (req, res) => {
Product.findById(req.params.id, (err, Product) => {
res.render('show.ejs', { Product });
    });
});

//NESTED REVIEWS
router.post('/product/:id/reviews', (req, res) => {
    //find the item
   Product.findById(req.params.id, (err, Product) => {
    //push review
Product.reviews.push(req.body);
    //send to mongo db
    Product.save((err, Product) => {
        //redirect
        res.redirect('/product/' + req.params.id);
        });
    })
});

module.exports = router;
