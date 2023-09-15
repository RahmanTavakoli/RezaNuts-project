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
            layout: "./layouts/dashLayout",
            adminName: req.user.adminName
        })
    } else {
        // عدم دسترسی به داشبورد برای کاربران
        res.redirect("/404"); 
    }
});


// @desc Logout Dashboard
// @route GET/dashboard/logout
router.get('/logout', isAuthenticated, (req, res)=> {
    if (req.user instanceof Admin) {
        // اlogout جازه دسترسی به مدیران احراز هویت شده به 
        req.logout(function(err) {
            if (err) {
                // مدیریت خطا در صورت وجود خطا
                console.error(err);
            }
            req.flash("success_msg", "خروج موفقیت‌آمیز بود مدیر جان");
            res.redirect("/admin/login");
        });
    } else {
        // عدم دسترسی به خروج برای کاربران احراز هویت نشده
        res.redirect("/404");
    }
});





module.exports = router;