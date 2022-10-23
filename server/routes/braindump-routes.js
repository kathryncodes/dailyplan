const express = require('express');
const router = express.Router();
const brainDumpController = require('../controllers/braindump-controller');

router.post("/newBrainDump", brainDumpController.newBrainDump);
router.get("/getBraindump/:id", brainDumpController.getBrainDump);
router.put("/editText/:id", brainDumpController.editText);
router.delete("/delete/:id", brainDumpController.deleteBrainDump);

module.exports = router;
