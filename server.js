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

//database connection

//require .env
require("dotenv").config({path: "./config/.env"});

