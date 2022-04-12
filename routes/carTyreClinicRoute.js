const express = require('express');
const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())

//requiring the model/schema of carTyreClinic
const CarTyreClinic = require('../models/carTyreClinicModel')

//accessing the carTyreClinic page
// router.get('/',(req, res)=>{
// // we are rendering the login pug file
//     res.render('carTyreClinic')
// });
router.get('/',async(req, res)=>{
    try{
        const data = await cartyreclinics.find({});
        console.log('>>>> all the cartyreclinic dealings',data)
        // then we render a route to the cartyre page
    res.render('cartyreclinic',{
        cartyreclinics:data
    })
    }
    catch(error){
        return res.status(400).send(
            {
                status:400,
                messages:'failed to fetch all the data from cartyre clinics',
                error            
    });
    }
});

router.post('/',(req,res)=>{
    //declaration of variables that correspond to the names in the form.
        const category = req.body.category
        const tyresize = req.body.tyresize
        const tyremake = req.body.tyremake
        const carmodel = req.body.carmodel
        const charge = req.body.charge
        
    //we are handling errors here
        const errors = req.validationErrors()
        if(errors){
        res.render('carTyreClinic')
        }
        else {
    //we have a new variable assigning it 
            let newCarTyreClinic = new CarTyreClinic({
    //value(property name from register schema):property(variable name)
                category:category,
                tyresize:tyresize,
                tyremake:tyremake,
                carmodel:carmodel,
                charge:charge
            });
    //saving our model to
        newCarTyreClinic.save((err) => {
             if(err){
                 console.error(err);
             return;
             }
             else {
    //we first flash a message confirm the saving of a record
    // we stay on the same form to register a new entry

                console.log('we have saved your data in the database')
                res.redirect('/home')
             }
           })
        }
        })

//we exposing our route to any file that will require it.
module.exports = router