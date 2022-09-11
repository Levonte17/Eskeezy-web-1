
const express = require('express');
const router = express.Router();

//SIGNUP PAGE GET
router.get('/signup', (req, res) => {
res.render('users/signup.ejs');
});

//SIGNUP GREATE POST
router.post('/login', (req, res) => {

});



//LOGIN GET
//LOGIN POST
//LOGOUT GET
module.exports = router;