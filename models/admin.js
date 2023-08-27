const mongoose = require('mongoose');
const Yup = require('yup');

const adminSchima = new mongoose.Schema({
    fullname:{
        type: String,
        required: [true, " نام کاربری الزامی است"] ,
        trim: true,
    },
    email:{
        type: String,
        required: [true," ایمیل الزامی است"],
        unique: [true ,"ایمیل قبلا ثیت شده است "]
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

const schema = Yup.object().shape({
    adminName: Yup.string()
        .required("نام کاربری الزامی است")
        .min(4, "نام کاربری نباید کمتر از 4 کاراکتر باشد")
        .max(255, "نام کاربری نباید بیشتر از 255 کاراکتر باشد"),
    adminEmail: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
    adminPass: Yup.string()
        .required("رمز ورود الزامی است")
        .min(4, "رمز ورود نباید کمتر از 4 کاراکتر باشد")
        .max(255, "رمز ورود نباید بیشتر از 255 کاراکتر باشد"),
    adminRepass: Yup.string()
        .required("تکرار رمز ورود یکسان نیست")
        .oneOf([Yup.ref("adminPass"), null]),
});

adminSchima.statics.adminValidation = function(body){
    return schema.validate(body,{abortEarly: false })            //چک کردن همه خطا ها
}

const Admin = mongoose.model("Admin" , adminSchima);

module.exports = Admin;