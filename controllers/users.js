//CONTROLLERS
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

//SIGNUP PAGE GET
router.get('/signup', (req, res) => {
res.render('users/signup.ejs');
});

//SIGNUP POST
router.post('/signup', (req, res) => {
    //Hash salt password
req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    //save password to database
User.create(req.body, (err, user) => {
    //create session on login
    req.session.userId = user._id 
    //redirect
res.redirect('/');
    });
});


//LOGIN GET
router.get('/login', (req, res) => {
res.render('users/login.ejs', { error: null });
});


//LOGIN POST
router.post('/login', (req, res) => {
    //Identify User
User.findOne({ username: req.body.username }, (err, foundUser) => {
    //Prevent Bruit Force
if(!foundUser) { 
    return res.render('users/login.ejs', {
         error: 'Sorry, Try Again' 
    });
}
    //Compare Password 
const isMatch = bcrypt.compareSync(
    req.body.password, 
    foundUser.password
    );
    if(!isMatch) {
        return res.render('users/login.ejs', { 
            error: 'Try Again' 
        });
    }
    //session redirect on correct pw
req.session.userId = foundUser._id;
res.redirect('/');

    });
});


//LOGOUT GET
router.get('/logout', (req, res) => {
req.session.destroy(() => {    // destroy user session
res.redirect('/');
    });
});
module.exports = router;