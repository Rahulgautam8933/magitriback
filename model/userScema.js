const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required : true
    },
    message: {
        type: String,
        required : true
    },
    
   
});



const User = mongoose.model('DATA',userSchema);
module.exports = User;