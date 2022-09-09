//DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CONSTRUCTOR
const productSchema = new Schema({
    img: {type: String},
    name: {type: String},
    price: {type: Number},
    category: {type: String},
}, {timestamps: true}); //approximately...

module.exports = mongoose.model('Product', productSchema);
