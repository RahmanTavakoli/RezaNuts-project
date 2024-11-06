const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { schema } = require('./secure/adminValidation');

const adminSchima = new mongoose.Schema({
    adminName:{
        type: String,
        required: [true, " نام کاربری الزامی است"] ,
        trim: true,
    },
    adminEmail:{
        type: String,
        required: [true," ایمیل الزامی است"],
        unique: [true ,"ایمیل قبلا ثیت شده است "]
    },
    adminPass:{
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

adminSchima.statics.adminValidation = function(body){
    return schema.validate(body,{abortEarly: false })            //چک کردن همه خطا ها
}

adminSchima.pre("save" , function(next){          // عملیات هش کردن پسورد قبل از ذخیره در پایگاه داده
    let admin = this; 

    if(!admin.isModified("adminPass")) return next();

    bcrypt.hash(admin.adminPass , 10 , (err, hash)=>{        
        if(err) return next(err);
        admin.adminPass = hash;
        next();
    })
})

module.exports =  mongoose.model("Admin" , adminSchima);