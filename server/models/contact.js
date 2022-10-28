let mongoose = require('mongoose');

//create model class
let contactList = mongoose.Schema({
    first: String,
    last: String,
    phone: String,
    email: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('Contacts', contactList)