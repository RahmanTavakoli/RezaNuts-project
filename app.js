const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotEnv = require('dotenv');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

const ConnectDB = require('./config/db');
const shopRoutes = require('./routes/routes');
const userProfileRoutes = require('./routes/userProfile');
const adminProfileRoutes = require('./routes/adminProfile');

//* Load Config
dotEnv.config({path: "./config/config.env"});

//* Database connction
ConnectDB();

const app = express();

//* Logging
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

//* view Engine 
app.use(expressLayout)
app.set('view engine' , 'ejs');
app.set("layout" , "./layouts/mainLayout");
app.set('views' , 'views');

//* BodyPaser
app.use(express.urlencoded({ extended: false }));
const bodyPaser = require('body-parser');

//*Session
app.use(session({
    secret: "secret",
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: false
}));

//*Flash
app.use(flash()); //req.flash

//* static folder
app.use(express.static(path.join(__dirname,"public")));

//* Routes
app.use(shopRoutes);
app.use("/user" , userProfileRoutes);
app.use("/admin" , adminProfileRoutes);
app.use("/dashboard" , adminProfileRoutes);

//! 404 page
app.use((req , res) => {
    res.render("404" , {pageTitle: "404 | صفحه ایی پیدا نشد" , path: "/404"})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`));
