//import & set app variable to express
const express = require('express');
const app = express();

//import other dependencies
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require("./config/database");
const cors = require('cors')

//debug empty post request
const bodyParser = require('body-parser')

//Setup CORS
app.use(cors({
  origin: true
}))

// origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: ['Content-Type'],
//   credentials: true


//import routes
//const mainRoutes = require('./routes/main');
const dashboardRoutes = require('./routes/dashboard-routes');
const braindumpRoutes = require('./routes/braindump-routes')
const scheduleRoutes = require('./routes/schedule-routes');
const toDoRoutes = require('./routes/todo-routes');

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//json
app.use(express.json())

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
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);


// // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// //Use flash messages for errors, info, ect...
app.use(flash());

//assign routes
//app.use("/", mainRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/braindump", braindumpRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/todo", toDoRoutes);

// //Server Running
app.listen(process.env.PORT, () => {
 console.log("Server is running, you better catch it!");
});

