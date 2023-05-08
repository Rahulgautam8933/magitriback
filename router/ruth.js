const express = require('express');
// const jwt = require('jsonwebtoken');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const authentication = require('../middleware/authentication');

require('../db/conn');
const User = require('../model/userScema');

router.get('/',(req,res)=>{
    res.send("hello this is router");

});



router.post('/register',async (req,res)=>{

    const { name, email, message} = req.body;
    console.log(req.body);

    if (!name || !email || !message) {
        res.status(404).json("pls fill all the field ");
        
    }
    try {
        const userExist = await User.findOne({email:email});
        if(userExist){
            res.status(404).json("email already exist");
        }
        else{
            const user = new User({name, email, message});
                
        await user.save();
        res.status(201).json(user);
        console.log(user);

        }
    } catch (error) {
        res.status(404).json(error)
    }

    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.email);
    // res.json({message: req.body}); 
    // res.send("this is register page")
});







module.exports = router;