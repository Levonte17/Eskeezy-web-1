//CONTROLLERS
const express = require('express');
const router = express.Router();

                //INDEX LINKS
//MAIN HOME
router.get('/', (req, res) => {
res.render('links/index.ejs')
});
//MURALS
router.get('/murals', (req, res) => {
res.render('links/murals.ejs')
});
//SUPER KIDS
router.get('/kids', (req, res) => {
res.render('links/kids.ejs')
});

//KUSTOMS 
router.get('/kustoms', (req, res) => {
res.render('links/kustoms.ejs');
});

//Q&A 
router.get('/questions', (req, res) => {
res.render('links/qa.ejs')
});

//PORTRAIT
router.get('/portraits', (req, res) => {
res.render('links/portriate.ejs')
});

//ABOUT
router.get('/about', (req, res) => {
res.render('links/about.ejs')
});

module.exports = router;