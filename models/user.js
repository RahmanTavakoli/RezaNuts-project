const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

userSchima.pre("save" , function(next){          // عملیات هش کردن پسورد قبل از ذخیره در پایگاه داده
    let user = this; 

    if(!user.isModified("userPass")) return next();

    bcrypt.hash(user.userPass , 10 , (err, hash)=>{        
        if(err) return next(err);
        user.userPass = hash;
        next();
    })
})

module.exports = mongoose.model("User" , userSchima);