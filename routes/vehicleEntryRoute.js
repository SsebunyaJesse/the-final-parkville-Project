const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());


// requiring our model or schema of register
const VehicleEntry = require('../models/vehicleEntryModel')

//accessing the mgtEntry page
router.get('/',(req, res)=>{
// we are rendering the register2 pug file
    res.render('vehicleEntry')
});
router.get('/home', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all .....
        const data = await vehicleentries.find({}).sort({$natural:-1});
       
        //  //The sum aggregate
        //  let totalTyre = await Tyre.aggregate([
        //   {$group:{_id:'$all', totalTyre:{ $sum:'$amount'}}}
        //   // {$group:{_id:'$all', totalValves:{ $sum:'$valves'}}}
          
        // ]);

        res.render('home', {
          vehicleentries : data, 
        //   total : totalParking[0],
          // total : totalValves[0]
        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

router.get('/reports', async(req,res)=>{
  // to pick data from the 
  try {
      // helps return all .....
      const data = await Tyre.find({}).sort({$natural:-1});
      res.render('reports', {
        tyres : data, 
      })
    } catch(error) {
      return res.status(400).send(
        { 
          status: 400,
          message: 'Oops failed to fetch all registrations',
          error
        });
  }
});

// we are creating the route for the post method
router.post('/',(req,res)=>{
// declaration of variables that correspond to the names in the form.
const category = req.body.category
const category2 = req.body.category2
const nin = req.body.nin
const driversname = req.body.driversname
const phonenumber = req.body.phonenumber
const numberplate = req.body.numberplate
const color = req.body.color
const arrivaltime = req.body.arrivaltime
const date = req.body.date
const model = req.body.model
const charge = req.body.charge

// we are handling errors here
const errors = req.validationErrors()
if(errors){
res.render('vehicleEntry')
}
else {
// we have a new variable assigning it 
    let newVehicleEntry = new VehicleEntry({
// value(property name from register schema):property(variable name)
        category:category,
        category2:category2,
        nin:nin,
        driversname:driversname,
        phonenumber:phonenumber,
        numberplate:numberplate,
        color:color,
        arrivaltime:arrivaltime,
        date:date,
        model:model,
        charge:charge
    });
// saving our model to
   newVehicleEntry.save((err) => {
     if(err){
         console.error(err);
     return;
     }
     else {
        //we fisrt flash a message confirm the saving of a record
        //we stay @ the same form to register a new entity
        req.flash('success', 'You have successfully signed up')
        console.log('we have saved your data in the database')
        res.redirect('/home')
     }
   })
}
})

//we exposing our route to any file that will require it.
module.exports = router