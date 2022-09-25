//import & set app variable to express
const express = require('express');
const app = express();

//import other dependencies
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require("./config/database");

//import routes
const mainRoutes = require('./routes/main');
const dashboardRoutes = require('./routes/dashboard-routes');

//require .env
require("dotenv").config({path: "./config/.env"});

//passport config
require("./config/passport")(passport);

//database connect
connectDB();

//set view engine
app.set("view engine", "ejs");

//static folder
app.use(express.static("public"));

// //Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //Logging
app.use(logger("dev"));

// //Use forms for put / delete
app.use(methodOverride("_method"));

//Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// //Use flash messages for errors, info, ect...
app.use(flash());

//assign routes
app.use("/", mainRoutes);
app.use("/dashboard", dashboardRoutes);

// //Server Running
app.listen(process.env.PORT, () => {
 console.log("Server is running, you better catch it!");
});

