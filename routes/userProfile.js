const {Router} = require('express');

const userController = require('../controllers/userController');

const router = new Router();


// @desc Login Page
// @route GET/user/login
router.get("/login", userController.login);

// @desc signup handle
// @route POST/user/login
router.post("/login", userController.createUser);

module.exports = router;