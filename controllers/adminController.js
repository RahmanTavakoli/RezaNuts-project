//const bcrypt = require('bcryptjs');
const passport = require('passport');
const fetch = require('node-fetch');

const Admin = require('../models/admin');

exports.login = (req,res) => {
    res.render("adminLogin", {
        pageTitle: "ورود به بخش مدیریت ",
        path: "/admin",
        successMsg: req.flash("success_msg"),
        error: req.flash("error"),
    })
}

exports.handleLogin = async (req, res, next) => {
    if(!req.body['g-recaptcha-response']){
        req.flash("error" , "اعتبار سنجی recaptcha الزامی میباشد.");
        return res.redirect("/admin/login")
    }

    const secretKey = process.env.CAPTCHA_SECRET;
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body["g-recaptcha-response"]}
    &remoteip=${req.connection.remoteAddress}`;


    const response = await fetch(verifyUrl, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
    });

    const json = await response.json();

    if (json.success) { 
        passport.authenticate("admin", {
            failureRedirect: "/admin/login",
            failureFlash: true,
        })(req, res, next);
    } else {
        req.flash("error", "مشکلی در اعتبارسنجی captcha هست");
        res.redirect("/admin/login");
    }
    
   
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
        // const hash = await bcrypt.hash(adminPass, 10);
        // await Admin.create({
        //     adminName,
        //     adminEmail,
        //     adminPass: hash
        // });
        await Admin.create({
            adminName,
            adminEmail,
            adminPass
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
