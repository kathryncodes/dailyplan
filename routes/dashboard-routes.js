const express = require("express");
const router = express.Router({mergeParams: true});
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const mainRoute = require('../routes/main')

//import other routes
const scheduleRoutes = require('./schedule-routes');
const brainDumpRoutes = require('./braindump-routes');
const toDoRoutes = require('./todo-routes');


//import dashboard Controller
const dashboardController = require('../controllers/dashboard-controller');

// load Dashboard page
router.get("/", ensureAuth, dashboardController.getDashboard);

//define paths to module routes
router.use("/schedule", ensureAuth , scheduleRoutes);
router.use("/braindump", ensureAuth, brainDumpRoutes);
router.use("/todo", ensureAuth,  toDoRoutes);

module.exports = router;