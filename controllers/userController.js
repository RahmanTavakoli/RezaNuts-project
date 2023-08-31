const User = require('../models/user');


exports.login = (req, res) => {
    res.render("login", {
        pageTitle: "ورود / ثبت نام",
        path: "/user"
    })
};



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
            });
        }
        await User.create(req.body);
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
        });
    }
}