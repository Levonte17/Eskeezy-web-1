//DEPENDECIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const shirtsRouter = require('./controllers/shirts');
const pantsRouter = require('./controllers/pants');
const jacketsRouter = require('./controllers/jackets');
const shoesRouter = require('./controllers/shoes');
const aboutsRouter = require('./controllers/abouts');
const paymentsRouter = require('./controllers/payments');
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
//HOME ROUTE
app.get('/', (req, res) => {
    res.redirect('Home_index.ejs');
});
//LISTEN 
app.listen(PORT, () => {
    console.log(`APP IS LISTENING ON PORT${PORT}`);
});