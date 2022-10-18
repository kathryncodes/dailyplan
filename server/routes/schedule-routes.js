const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule-controller');

//also require auth

router.get("/getSchedule/:id", scheduleController.getSchedule);

router.post("/newSchedule", scheduleController.newSchedule);

router.put("/addBlock/:id", scheduleController.addBlock);

router.put("/deleteBlock/:scheduleID&:blockID", scheduleController.deleteBlock)

router.delete("/delete/:id", scheduleController.deleteSchedule)

//ROUTES
    //      /add --> new instance of schedule model
    //      /:id/addBlock --> new time block for this module
    //      /:id/editBlock --> edit specific block
    //      /:id/deleteBlock --> delete specific block
    //      /delete/:id --> delete this module

module.exports = router;