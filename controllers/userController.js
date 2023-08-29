const User = require('../models/user');


exports.login = (req, res) => {
    res.render("login", {
        pageTitle: "ورود / ثبت نام",
        path: "/user"
    })
};



exports.createUser = async(req , res) => {
    try {
        await User.userValidation(req.body);
        //await User.created(req.body);
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
        return  res.render("login", {
            pageTitle: "ورود / ثبت نام",
            path: "/user",
            errors,
        });
    }
}