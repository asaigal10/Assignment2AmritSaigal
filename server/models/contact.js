let mongoose = require('mongoose');

//create model class
let contactModel = mongoose.Schema({
    first: String,
    last: String,
    phone: String,
    email: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('Contacts', contactModel)