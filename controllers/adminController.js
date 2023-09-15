const bcrypt = require('bcryptjs');
const passport = require('passport');

const Admin = require('../models/admin');

exports.login = (req,res) => {
    res.render("adminLogin", {
        pageTitle: "ورود به بخش مدیریت ",
        path: "/admin",
        successMsg: req.flash("success_msg"),
        error: req.flash("error"),
    })
}

exports.handleLogin = (req, res, next) => {
    passport.authenticate("admin", {
        // successRedirect: "/dashboard",
        failureRedirect: "/admin/login",
        failureFlash: true,
    })(req, res, next);
}

exports.adminRememberMe = (req, res) => {
    if(req.body.rememberAdmin){
        req.session.cookie.originalMaxAge= 1 * 60 * 60 * 1000 // 1 hour
    }else{
        req.session.cookie.expire = null
    }

    res.redirect("/dashboard");
}

exports.signup = (req,res) => {
    res.render("adminSignup", {
        pageTitle: " ثبت نام بخش مدیریت ",
        path: "/admin"
    });
}

exports.createAdmin = async (req, res) => {
    const errors = [];
    try {
        await Admin.adminValidation(req.body);
       
        const { adminName , adminEmail , adminPass } = req.body;
        const admin = await Admin.findOne({
            adminEmail
        });
        if (admin) {
            errors.push({
                message: "مدیری با این ایمیل موجود است"
            });
            return res.render("adminSignup", {
                pageTitle: " ثبت نام بخش مدیریت ",
                path: "/admin",
                errors
            });
        }
        const hash = await bcrypt.hash(adminPass, 10);
        await Admin.create({
            adminName,
            adminEmail,
            adminPass: hash
        });
        
        req.flash("success_msg" , " ثبت نام شدی آقای مدیر :) ");
        res.redirect("/admin/login");

    } catch (err) {
        console.log(err);
        const errors = [];
        err.inner.forEach((e) => {
            errors.push({
                name: e.path,
                message: e.message,
            });
        });
        return res.render("adminSignup", {
            pageTitle: " ثبت نام بخش مدیریت ",
            path: "/admin",
            errors,
        });
    }
}
