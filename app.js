const path = require('path');

const express = require('express');
const expressLayout = require('express-ejs-layouts');
dotEnv = require('dotenv');
const morgan = require('morgan');

const ConnectDB = require('./config/db');
const indexRoutes = require('./routes');

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
app.set("layout" , "./layouts/mainLayout")
app.set('views' , 'views');

//* static folder
app.use(express.static(path.join(__dirname,"public")));

//* Routes
app.use(indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`));
