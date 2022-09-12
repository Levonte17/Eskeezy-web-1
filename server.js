//DEPENDECIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const productsRouter = require('./controllers/products');
const usersRouter = require('./controllers/users');
const linksRouter = require('./controllers/links');
const expressSession = require('express-session');





//const path = require('path');





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
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
//app.use(express.static)


//SESSON MIDDLEWARE
app.use(expressSession({
    secret: 'gdf974**ghjhvhj$', //cookie
    resave: false, //
    saveUninitialized: false // dont force cookie

}));

//AUTHERIZATION MIDDLEWARE
    //Require User Model
const User = require('./models/user');

    //Only Admin Can Upload/Edit products
app.use((req, res, next) => {
        //user in session?
    if(req.session.userId) {
        user.findById(req.session.userId, (err, user) => {
            req.user = user;
        res.locals.user = {
            username: user.username,
            _id: user._id
    }; next();
});
} else {
                //Access Username Only
            res.locals.user = null;
            res.user = null;
            next();
}
       
}); 

//AUTHENTICATION PAGES
function isAuthenticated(req, res, next) { //not in use
if(!req.user) return res.redirect('/login')
}


// TO DO
app.use(productsRouter);
app.use(usersRouter);
app.use(linksRouter);

//LISTEN 
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT${PORT}`);
});