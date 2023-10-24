//import & set app variable to express
const express = require('express');
const app = express();

//import other dependencies
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
//const connectDB = require("./config/database");
const cors = require('cors')

//require .env
require("dotenv").config({path: "./config/.env"});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l4fnnps.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


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
const timerRoutes = require('./routes/timer-routes')
const worldClockRoutes = require('./routes/worldclock-routes')

//passport config
require("./config/passport")(passport);


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
app.use("/timer", timerRoutes);
app.use("/worldclock", worldClockRoutes)

// //Server Running
app.listen(process.env.PORT, () => {
 console.log("Server is running, you better catch it!");
});

