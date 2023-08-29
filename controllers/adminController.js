
const Admin = require('../models/admin');

exports.login = (req,res) => {
    res.render("adminLogin", {
        pageTitle: "ورود به بخش مدیریت ",
        path: "/admin"
    })
}

exports.signup = (req,res) => {
    res.render("adminSignup", {
        pageTitle: " ثبت نام بخش مدیریت ",
        path: "/admin"
    });
}

exports.createAdmin = async (req, res) => {
    try {
        await Admin.adminValidation(req.body);
        //await User.created(req.body);
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

exports.getDashboard = (req, res) => {
    res.render("dashboard", {
        pageTitle: "داشبورد  |  بخش مدیریت ",
        path: "/dashboard",
        layout: "./layouts/dashLayout"
    })
}