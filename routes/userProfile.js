const {
    Router
} = require('express');

const User = require('../models/user');

const router = new Router();



// @desc Login Page
// @route GET/user/login
router.get("/login", (req, res) => {
    res.render("login", {
        pageTitle: "ورود / ثبت نام",
        path: "/user"
    })
});

// @desc signup handle
// @route POST/user/login
router.post("/login", async (req, res) => {
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
});

module.exports = router;