const {
    Router
} = require('express');

const router = new Router();

// @desc Admin Login Page
// @route GET/Admin/login
router.get("/login", (req, res) => {
    res.render("adminLogin", {
        pageTitle: "ورود به بخش مدیریت ",
        path: "/admin"
    })
});

// @desc Admin signup Page
// @route GET/Admin/signup
router.get("/signup", (req, res) => {
    res.render("adminSignup", {
        pageTitle: "ورود به بخش مدیریت ",
        path: "/admin"
    })
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