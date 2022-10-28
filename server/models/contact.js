/* Name: Amrit Saigal*/
/* File Name:Authentication Details*/
/* Student Number: 301217316*/
/* October 28, 2022 */

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