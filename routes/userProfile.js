const {
    Router
} = require('express');

const userController = require('../controllers/userController');
const {
    isAuthenticated
} = require('../middleWare/auth');

const router = new Router();


// @desc Login Page
// @route GET/user/login
router.get("/login", userController.login);

// @desc Login Handle
// @route post/user/login
router.post("/login", userController.handleLogin);

// @desc signup handle
// @route POST/user/login
router.post("/signup", userController.createUser);

// @desc User Profile
// @route GET/userProfile
router.get('/', isAuthenticated, userController.userProfileLogin);


module.exports = router;