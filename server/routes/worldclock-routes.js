const express = require('express');
const router = express.Router();
const worldClockController = require('../controllers/worldclock-controller');

router.post("/newWorldClock", worldClockController.newWorldClock)

//change these:
router.get("/getWorldClock/:id", worldClockController.getWorldClock)

router.put("/addTimezone/:id", worldClockController.addTimezone) 

//change these:
router.put("/deleteTimezone/:timezoneID&:worldclockID", worldClockController.deleteTimezone)

router.delete("/deleteWorldClock/:id", worldClockController.deleteWorldClock)

module.exports = router;