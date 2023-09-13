const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');
const User = require('../models/user');

// استراتژی احراز هویت برای کاربران عادی
passport.use( 'user', new Strategy({
    usernameField: 'userEmail',
    passwordField: 'userPass'
}, async (userEmail, userPass, done) => {
    try {
        const user = await User.findOne({ userEmail });
        if (!user) {
            return done(null, false, {
                message: 'کاربری با این ایمیل ثبت نشده است'
            });
        }

        const isMatch = await bcrypt.compare(userPass, user.userPass);
        if (isMatch) {
            return done(null, user);
        } else {
            return done(null, false, {
                message: 'نام کاربری یا کلمه عبور صحیح نیست'
            });
        }
    } catch (err) {
        console.log(err);
    }
}));


// استراتژی احراز هویت برای مدیران
passport.use('admin', new Strategy({
    usernameField: 'adminEmail',
    passwordField: 'adminPass'
}, async (adminEmail, adminPass, done) => {
    try {
        const admin = await Admin.findOne({ adminEmail });
        if (!admin) {
            return done(null, false, {
                message: 'مدیری با این ایمیل ثبت نشده است'
            });
        }

        const isMatch = await bcrypt.compare(adminPass, admin.adminPass);
        if (isMatch) {
            return done(null, admin);
        } else {
            return done(null, false, {
                message: 'نام کاربری یا کلمه عبور صحیح نیست'
            });
        }
    } catch (err) {
        console.log(err);
    }
}));



passport.serializeUser((user, done) => {
    if (user instanceof Admin) {
        done(null, 'admin:' + user.id);
    } else if (user instanceof User) {
        done(null, 'user:' + user.id);
    } else {
        done(new Error('Invalid user type'));
    }
});

passport.deserializeUser(async (serializedUser, done) => {
    const parts = serializedUser.split(':');
    const userType = parts[0];
    const userId = parts[1];

    if (userType === 'admin') {
        try {
            const admin = await Admin.findById(userId);
            done(null, admin);
        } catch (err) {
            done(err);
        }
    } else if (userType === 'user') {
        try {
            const user = await User.findById(userId);
            done(null, user);
        } catch (err) {
            done(err);
        }
    } else {
        done(new Error('Invalid user type'));
    }
});
