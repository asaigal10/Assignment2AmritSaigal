let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to our Contact Model
let Contact = require("../models/contact")

function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Contact List page - READ Operation */
router.get('/', (req, res, next) => {
    // find all contact in the contacts collection
    Contact.find( (err, contact) => {
      if (err) {
        return console.error(err);
      }
      else {
        res.render('contact/index', {
          title: 'contact',
          contact: contact
        });
      }
    });
  });

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', (req, res) => {
    Contact.find( (err, contact) => {
          if (err) {
              return console.error(err);
          }
          else {
              res.render('contact/details', {
                  title: 'Edit',
                  contact: contact
              });
          }
      });
  });

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', (req, res, next) => {

    const {first, last, phone, email} = req.body; // Extrapolating data from req.body
  
    const newContacts = new Contact({
      first,
      last,
      phone,
      email
    });
  
      Contact.create(newContacts, (err, Contact) =>{
          if(err)
          {
              console.log(err);
              res.end(err);
          }
          else
          {
              // refresh contact list
              res.redirect('/contact');
          }
      });
    });
/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactsToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', {title: 'Edit Contacts', contact: contactsToEdit
                });
        }
    });

});

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) => {

    let id = req.params.id;

    const {first, last, phone, email} = req.body; // Extrapolating data from req.body
  
    const updatedContacts = new Contact({
      
      _id: id,  
      first,
      last,
      phone,
      email,
  });

    Contact.updateOne({_id: id}, updatedContacts, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh  contact list
            res.redirect('/contact');
        }
    });

});

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh contact list
            res.redirect('/contact');
        }
    });

});

module.exports = router;