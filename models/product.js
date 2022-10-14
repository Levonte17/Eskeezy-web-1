//DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//REVIEWS
const reviewSchema = new Schema({

    body: {type: String},
    rating: {type: Number, min: 1, max: 5, default: 5}
    }, {timestamps: true}); //approximatly...
//CONSTRUCTOR
const productSchema = new Schema({
    img: [{type: String}],
    name: [{type: String}],
    price: {type: Number},
    reviews: [reviewSchema] //embeded
}, {timestamps: true}); //approximately...

module.exports = mongoose.model('Product', productSchema);
