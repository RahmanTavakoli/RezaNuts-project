const {
    Router
} = require('express');
const Yup = require('yup');

const router = new Router();

const userSchema = Yup.object().shape({
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

// @desc Login Page
// @route GET/user/login
router.get("/login", (req, res) => {
    res.render("login", {
        pageTitle: "ورود / ثبت نام",
        path: "/user"
    })
});

// @desc signup handle
// @route POST/user/login
router.post("/login", (req, res) => {
    userSchema.validate(req.body).then((result) => {
        console.log(result);
        res.send("All Good")
    }).catch(err => {
        console.log(err);
        res.send("Error")
    })
});

module.exports = router;