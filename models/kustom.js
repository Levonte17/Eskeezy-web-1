//DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CONSTRUCTOR
const kustomSchema = new Schema({
    img: {type: String},
}, {timestamps: true}); //approximately...

module.exports = mongoose.model('kustoms', productSchema);