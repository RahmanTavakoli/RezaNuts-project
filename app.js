const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const dotEnv = require('dotenv');
const morgan = require('morgan');

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

//* static folder
app.use(express.static(path.join(__dirname,"public")));

//* Routes
app.use(shopRoutes);
app.use("/user" , userProfileRoutes);
app.use("/admin" , adminProfileRoutes);
app.use("/dashboard" , adminProfileRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`));
