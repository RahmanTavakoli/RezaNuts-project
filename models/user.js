const mongoose = require('mongoose');

const { schema } = require('./secure/userValidation');

const userSchima = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
    },
    userEmail:{
        type: String,
        required: true,
        unique: true
    },
    userPass:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,

    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

userSchima.statics.userValidation = function(body){
    return schema.validate(body,{abortEarly: false })            //چک کردن همه خطا ها
}

const User = mongoose.model("User" , userSchima);

module.exports = User;