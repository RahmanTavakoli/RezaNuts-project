const mongoose = require('mongoose');

const { schema } = require('./secure/userValidation');

const userSchima = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
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