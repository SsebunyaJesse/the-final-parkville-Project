const express = require('express');
const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())

// requiring the model/schema of batteryHireEntry
const BatteryHireEntry = require('../models/batteryHireEntryModel')

//to locate the car entry  page
router.get('/',(req, res)=>{
//we are rendering the batteryHireEntry pug file
    res.render('batteryHireEntry')
});

router.post('/',(req,res)=>{
//declaration of variables that correspond to the names in the form.
    const price = req.body.price
    const batterysize = req.body.batterysize
    
//we are handling errors here
    const errors = req.validationErrors()
    if(errors){
    res.render('batteryHireEntry')
    }
    else {
//we have a new variable assigning it 
        let newBatteryHireEntry = new BatteryHireEntry({
//value(property name from register schema):property(variable name)
            batterysize:batterysize,
            price:price,
        });
//saving our model to
    newBatteryHireEntry.save((err) => {
         if(err){
             console.error(err);
         return;
         }
         else {
//  we first flash a message confirm the saving of a record
//  we stay on the form to register a new user
            req.flash('success', 'We have successfully saved your battery hires')
            console.log('we have saved your data in the database')
            res.redirect('/home')
         }
       })
    }
    })

//we exposing our route to any file that will require it.
module.exports = router