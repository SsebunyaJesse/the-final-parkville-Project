const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator());
const signups = require('../models/signupModel');


//accessing the home page
router.get('/', async(req, res)=>{
    try{
        const data = await signups.find({});
        console.log('>>>> all signups', data)

// we are rendering the home pug file
    res.render('home', {
        signups: data
    })
   }
   catch(error) {
       return res.status(400).send(
           {
               status: 400,
               message: 'failed to fetch all clients',
               error
           });
   }
});

//delete signups
router.get('/delete/:id',async(req, res) => {
    try{
        await signups.deleteOne({_id:req.params.id})
        res.redirect('/home');
    }
    catch{
        res.status(400).send('unable to delete from database')
    }

});

// edit signups
router.get('/editSignup/:id',async(req, res) => {
    try{
        const editSignup = await signups.findOne({_id:req.params.id})
        res.render('editSignup', {signup:editSignup});
    }
    catch{
        res.status(400).send('unable to edit from database')
    }

});

router.post('/editSignup', async(req,res) => {
   try {
       await signup.findOneAndUpdate({_id: req.query.id}, req.body)
       res.redirect('/home')
   } catch (error) {
        res.status(400).send('unable to edit from database')
   }
})
router.post('/',(req,res) => {
    res.render('home')
});

//we exposing our route to any file that will require it.
module.exports = router

























// const express = require('express');
// // const router = express.Router();

// // accessing the home page
// router.get('/',(req, res)=>{
// // we are rendering the home pug file
//     res.render('home')
// });


















// // router.get('/', async (req, res) =>{
// //     try {
// //       const data = await VehicleEntry.find({}).sort({ $natural: -1 });
// //       res.render('home',{vehicleentries : data})
// //     }
// //     catch (error) {
// //         return res.status(400).send(
// //           {
// //             status: 400,
// //             message: 'Oops failed to fetch all registrations',
// //             error
// //           })
// //  } }
// //         else{
// //          res.redirect('/home')
// //        }
// //  );

// router.post('/',(req,res)=>{
//     res.render('home')
// });
// //we exposing our route to any file that will require it.
// module.exports = router


// router.get('/', async (req, res) => {
//     try {
//       const data = await Registration.find({}).sort({ $natural: -1 });
//       res.render('',{vehicleentries : data})
//     }
//     catch (error) {
//         return res.status(400).send(
//           {
//             status: 400,
//             message: 'Oops failed to fetch all registrations',
//             error
//           });
//        }
//  });
    