const express = require("express");
const router = express.Router({mergeParams: true});
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const dashboardController = require('../controllers/dashboard-controller');

//import other routes
const scheduleRoutes = require('./schedule-routes');
const brainDumpRoutes = require('./braindump-routes');
const toDoRoutes = require('./todo-routes');

// load Dashboard page
router.get("/", dashboardController.getDashboard);

// //define paths to module routes
// router.use("/schedule",  scheduleRoutes);
// router.use("/braindump",  brainDumpRoutes);
// router.use("/todo",  toDoRoutes);

module.exports = router;