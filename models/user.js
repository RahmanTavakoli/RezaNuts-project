const mongoose = require('mongoose');
const Yup = require('yup');

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

const schema = Yup.object().shape({
    userName: Yup
        .string()
        .required("نام کاربری الزامی است")
        .min(4, "نام کاربری نباید کمتر از 4 کاراکتر باشد")
        .max(255, "نام کاربری نباید بیشتر از 255 کاراکتر باشد"),
    userEmail: Yup
        .string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
    userPass: Yup
        .string()
        .required("رمز ورود الزامی است")
        .min(4, "رمز ورود نباید کمتر از 4 کاراکتر باشد")
        .max(255, "رمز ورود نباید بیشتر از 255 کاراکتر باشد"),
    userRepass: Yup
        .string()
        .required("تکرار رمز ورود یکسان نیست")
        .oneOf([Yup.ref("userPass"), null])
});

userSchima.statics.userValidation = function(body){
    return schema.validate(body,{abortEarly: false })            //چک کردن همه خطا ها
}

const User = mongoose.model("User" , userSchima);

module.exports = User;