const express = require('express');
const router = express.Router();
const brainDumpController = require('../controllers/braindump-controller');

//also need to import authentication --> check Leon's repo

//ROUTES
//  /add --> new instance of braindump model
//  /:id/edit --> update text field to = input
//  /delete/:id --> delete module

router.post("/newBrainDump", brainDumpController.newBrainDump);
router.get("/getBraindump/:id", brainDumpController.getBrainDump);
router.put("/editText/:id", brainDumpController.editText);
router.delete("/delete/:id", brainDumpController.deleteBrainDump);

module.exports = router;
