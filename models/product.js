//DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//CONSTRUCTOR
const productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    adult: {type: Array, required: true},
    youth: {type: Array, required: true} 
}, {timestamps: true}); //approximately...
module.exports = mongoose.model('Product', productSchema);
