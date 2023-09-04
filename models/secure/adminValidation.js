const Yup = require('yup');

exports.schema = Yup.object().shape({
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
        .oneOf([Yup.ref("adminPass"), null ,"تکرار رمز ورود یکسان نیست"]),
});