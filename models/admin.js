const mongoose = require('mongoose');

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


const Admin = mongoose.model("Admin" , adminSchima);

module.exports = Admin;