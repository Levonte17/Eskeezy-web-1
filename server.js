//DEPENDECIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const productsRouter = require('./controllers/products');
const usersRouter = require('./controllers/users');
const linksRouter = require('./controllers/links');
const stripesRouter = require('./controllers/stripes')
const expressSession = require('express-session');


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
app.use(express.static('public'))


//SESSON MIDDLEWARE
app.use(expressSession({
    secret: 'gdf974**ghjhvhj$', //cookie
    resave: false, //
    saveUninitialized: false // dont force cookie

}));

//AUTHERIZATION MIDDLEWARE
    //Require User Model
const User = require('./models/user');

/*
    //Only Admin Can Upload/Edit products
app.use((req, res, next) => {
        //user in session?
    if(req.session.userId) {
        User.findById(req.session.userId, (err, user) => {
            req.user = user;
        res.locals.user = {
            username: user.username
    }; 
});
} else {
                //Access Username Only
            res.user = null;
            res.locals.user = null;
            next();
        }
}); 


//AUTHENTICATION PAGES
function isAuthenticated(req, res, next) { //not in use
    next();
}
*/

//HOME RE-ROUTE
app.get('/', (req, res) => {
    res.render('./links/index.ejs')
    });

// TO DO
app.use(productsRouter);
app.use(usersRouter);
app.use(linksRouter);
//app.use(stripes.Router);

//LISTEN 
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT${PORT}`);
});