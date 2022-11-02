const express = require('express');
const router = express.Router();
const timerController = require('../controllers/timer-controller');

router.get("/getTimer/:id", timerController.getTimer);
router.post("/newTimer", timerController.newTimer);
router.delete("/deleteTimer/:id", timerController.deleteTimer)


module.exports = router;