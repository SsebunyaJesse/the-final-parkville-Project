
const express = require('express');
const router = express.Router();
const vehicleEntry = require('../models/vehicleEntryModel')
// router.use(expressValidator());
//accessing the home page
// router.get('/',(req, res)=>{
// we are rendering the home pug file
    // res.render('reports')
// });
router.get('/', async (req, res) =>{
        try {
            const data = await vehicleEntry.find({}).sort({ $natural: -1 });
            console.log('>>>>>>all registration',data)
            res.render('reports',{vehicleentries : data})
        
        }   catch (error) {
            return res.status(400).send(
              {
                status: 400,
                message: 'Oops failed to fetch all registrations',
                error
              });
     } }
        // else{
        //     res.redirect('/reports')
        //    }
     );
// router.get('/', async)

router.post('/',(req,res)=>{
    res.render('reports')
});
//we exposing our route to any file that will require it.
module.exports = router






















// const express = require('express');
// const router = express.Router();

// const passport = require('passport')
// const expressValidator = require('express-validator')
// router.use(expressValidator())

// //requiring the model/schema of carTyreClinic
// const DepartureReceipt = require('../models/departureReceiptModel')

// //accessing the departureReceipt page
// router.get('/',(req, res)=>{
// // we are rendering the login_2 pug file
//     res.render('departureReceipt')
// });



// router.get('/reports', async(req,res)=>{
//     // to pick data from the 
//     try {
//         // helps return all .....
//         const data = await Tyre.find({}).sort({$natural:-1});
//         res.render('reports', {
//           tyres : data, 
//         })
//       } catch(error) {
//         return res.status(400).send(
//           { 
//             status: 400,
//             message: 'Oops failed to fetch all registrations',
//             error
//           });
//     }
//   });
//   module.exports = router
