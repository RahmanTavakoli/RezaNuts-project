const path = require('path');

const debug = require('debug')("rezaNut-project");
const express = require('express');
const mongoose = require('mongoose');
const expressLayout = require('express-ejs-layouts');
const passport = require('passport');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const ConnectDB = require('./config/db');
const winston = require('./config/winston');
const shopRoutes = require('./routes/routes');
const userProfileRoutes = require('./routes/userProfile');
const adminProfileRoutes = require('./routes/adminProfile');
const adminDashboardRoutes = require('./routes/adminDashboard');


//* Load Config
dotEnv.config({
    path: "./config/config.env"
});

//* Database connction
ConnectDB();
debug("Connected To Database");


//*Passport configuration
require('./config/passportStrategies');

const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
    debug("Morgan Enabaled")
    app.use(morgan("combined" , {stream: winston.stream}));
}

//* view Engine 
app.use(expressLayout)
app.set('view engine', 'ejs');
app.set("layout", "./layouts/mainLayout");
app.set('views', 'views');

//* BodyPaser
app.use(express.urlencoded({
    extended: false
}));
const bodyPaser = require('body-parser');

//*Session
// تنظیمات session
app.use(session({
    secret: "secret",
    cookie: {
        maxAge: 600000 // 10 دقیقه به میلی‌ثانیه
    },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

//*Passport
app.use(passport.initialize());
app.use(passport.session());

//*Flash
app.use(flash()); //req.flash

//* static folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes
app.use(shopRoutes);
app.use("/products", shopRoutes);
app.use("/user", userProfileRoutes);
app.use("/admin", adminProfileRoutes);
app.use("/dashboard", adminDashboardRoutes);
app.use("/userProfile", userProfileRoutes);
//! 404 page
app.use((req, res) => {
    res.render("404", {
        pageTitle: "404 | صفحه ایی پیدا نشد",
        path: "/404"
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`));