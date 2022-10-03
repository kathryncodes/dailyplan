const express = require("express");
const router = express.Router({mergeParams: true});
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const dashboardController = require('../controllers/dashboard-controller');

//import other routes
const scheduleRoutes = require('./schedule-routes');
const brainDumpRoutes = require('./braindump-routes');
const toDoRoutes = require('./todo-routes');

// load Dashboard page
router.get("/getDashboard", dashboardController.getDashboard);

// //define paths to module routes
// router.use("/schedule", ensureAuth , scheduleRoutes);
// router.use("/braindump", ensureAuth, brainDumpRoutes);
// router.use("/todo", ensureAuth,  toDoRoutes);

module.exports = router;