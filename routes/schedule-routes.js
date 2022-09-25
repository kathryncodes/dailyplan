const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule-controller');

//also require auth


//ROUTES
    //      /add --> new instance of schedule model
    //      /:id/addBlock --> new time block for this module
    //      /:id/editBlock --> edit specific block
    //      /:id/deleteBlock --> delete specific block
    //      /delete/:id --> delete this module

module.exports = router;