
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
        await Admin.create(req.body);
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