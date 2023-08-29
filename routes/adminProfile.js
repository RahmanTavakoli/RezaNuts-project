const {Router} = require('express');

const adminController = require('../controllers/adminController');

const router = new Router();

// @desc Admin Login Page
// @route GET/Admin/login
router.get("/login", adminController.login);

// @desc Admin signup Page
// @route GET/admin/signup
router.get("/signup", adminController.signup);

// @desc Admin Login Page
// @route POST/admin/signup
router.post("/signup", adminController.createAdmin);

// @desc Dashboard
// @route GET/dashboard
router.get("/", adminController.getDashboard);

module.exports = router;