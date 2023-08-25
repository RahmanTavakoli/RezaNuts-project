const {
    Router
} = require('express');
const Yup = require('yup');

const router = new Router();

const AdminSchema = Yup.object().shape({
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

// @desc Admin Login Page
// @route GET/Admin/login
router.get("/login", (req, res) => {
    res.render("adminLogin", {
        pageTitle: "ورود به بخش مدیریت ",
        path: "/admin"
    })
});

// @desc Admin signup Page
// @route GET/admin/signup
router.get("/signup", (req, res) => {
    res.render("adminSignup", {
        pageTitle: "ورود به بخش مدیریت ",
        path: "/admin"
    });
});

// @desc Admin Login Page
// @route POST/admin/signup
router.post("/signup", (req, res) => {
    AdminSchema
        .validate(req.body)
        .then((result) => {
           res.redirect("/admin/login")
        })
        .catch((err) => {
            console.log(err.errors);
            res.render("adminSignup", {
                pageTitle: "ورود به بخش مدیریت ",
                path: "/admin",
                errors: err.errors
            });
        });
});


// @desc Dashboard
// @route GET/dashboard
router.get("/", (req, res) => {
    res.render("blogs", {
        pageTitle: "داشبورد  |  بخش مدیریت ",
        path: "/dashboard",
        layout: "./layouts/dashLayout"
    })
});

module.exports = router;