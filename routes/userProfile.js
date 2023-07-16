const { Router } = require('express');

const router = new Router();

// @desc Login Page
// @route GET/user/login
router.get("/login" , (req,res) =>{
    res.render("login" , {pageTitle : "ورود / ثبت نام" , path: "/user"})
});

module.exports = router;