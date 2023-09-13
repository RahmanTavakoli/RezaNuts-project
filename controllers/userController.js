const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/user');
const {
    ensureAdminAuthenticated,
    ensureUserAuthenticated,
    isAuthenticated
} = require('../middleWare/auth');


exports.login = (req, res) => {
    res.render("login", {
        pageTitle: "ورود / ثبت نام",
        path: "/user",
        successMsg: req.flash("success_msg"),
        error: req.flash("error")
    })
};


exports.handleLogin = (req, res, next) => {
    passport.authenticate("user", {
        successRedirect: "/userprofile",
        failureRedirect: "/user/login",
        failureFlash: true,
    })(req, res, next);
}



exports.createUser = async (req, res) => {
    const errors = [];
    try {
        await User.userValidation(req.body);
        const {
            userName,
            userEmail,
            userPass
        } = req.body;
        const user = await User.findOne({
            userEmail
        });
        if (user) {
            errors.push({
                message: "کاربری با این ایمیل موجود است"
            });
            return res.render("login", {
                pageTitle: "ورود / ثبت نام",
                path: "/user",
                errors,
                successMsg: req.flash("success_msg"),
                error: req.flash("error")
            });
        }
        const hash = await bcrypt.hash(userPass, 10);
        await User.create({
            userName,
            userEmail,
            userPass: hash
        });
        req.flash("success_msg", "ثبت نام با موفقیت انجام شد:)");
        res.redirect("/user/login");

    } catch (err) {
        console.log(err);
        const errors = [];
        err.inner.forEach((e) => {
            errors.push({
                name: e.path,
                message: e.message,
            });
        });
        return res.render("login", {
            pageTitle: "ورود / ثبت نام",
            path: "/user",
            errors,
            successMsg: req.flash("success_msg"),
            error: req.flash("error")
        });
    }
}

exports.userProfileLogin = (req, res) => {
    if (req.user instanceof User) {
        // اجازه دسترسی به داشبورد برای کاربران
        res.render("userProfile", {
            pageTitle: " پروفایل  |   کاربر ",
            path: "/userprofile"
        })
    } else {
        // عدم دسترسی به داشبورد برای مدیران
        res.redirect("/404");
    }

    
}