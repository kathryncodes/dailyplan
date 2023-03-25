const express = require('express');
const router = express.Router();
const worldClockController = require('../controllers/worldclock-controller');

router.post("/newWorldClock", worldClockController.newWorldClock)

//change these:
router.get("/getList/:id", worldClockController.getWorldClock)

router.put("/addItem/:id", worldClockController.addTimezone) 

//change these:
router.put("/deleteItem/:listID&:itemID", worldClockController.deleteTimezone)

router.delete("/deleteList/:id", worldClockController.deleteWorldClock)

module.exports = router;