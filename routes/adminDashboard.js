const {
    Router
} = require('express');
require('passport');

const {
    isAuthenticated
} = require('../middleWare/auth');
const Admin = require('../models/admin');

const router = new Router();

// @desc Dashboard
// @route GET/dashboard
router.get('/', isAuthenticated, (req, res) => {
    if (req.user instanceof Admin) {
        // اجازه دسترسی به داشبورد برای مدیران
        res.render("dashboard", {
            pageTitle: "داشبورد  |  بخش مدیریت ",
            path: "/dashboard",
            layout: "./layouts/dashLayout"
        })
    } else {
        // عدم دسترسی به داشبورد برای کاربران
        res.redirect("/404"); 
    }
});





module.exports = router;