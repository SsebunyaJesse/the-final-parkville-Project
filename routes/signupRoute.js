const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// We are requiring the schema for signUps which is in the ../models/signup
const Signup = require('../models/signupModel')

// accessing the signup page
router.get('/',(req, res)=>{
// we are rendering the signup pug file
    res.render('signup')
});

// we are creating the route for the post method
router.post('/',(req,res)=>{
    // declaration of variables that correspond to the
    // names in the form.
    const username = req.body.username
    const nin = req.body.nin
    const email = req.body.email
    const password = req.body.password
    const gender = req.body.gender

    // we are handling errors here
    const errors = req.validationErrors()
    if(errors){
    res.render('signup')
    }
    else {
    // we have a new variable assigning it 
        let newSignup = new Signup({
    // value(property name from signup schema):property(variable name)
            username:username,
            nin:nin,
            email:email,
            password:password,
            gender:gender
        });

    //encrypting the password using bcrypt
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newSignup.password, salt, (err, hash) => {
                if (err) {
                    console.error(err)
                    return;
                }else{
                    newSignup.password = hash;
                    // saving our model to
                    newSignup.save((err) => {
                        if(err){
                            console.error(err);
                        return;
                        }
                        else {
                        //we first flash a message confirm the saving of a record
                        req.flash('success', 'You have successfully signed up')
                        //we stay @ the same form to register a new entity
                        
                        console.log('PARKVILLE SOFTWARE SOLUTIONS HAS SUCCESSFULLY SAVED YOUR DATA')
                        res.redirect('/login')
                        }
                    })
                }
            })
        
        })
    }
})

//we exposing our route to any file that will require it.
module.exports = router