const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth')
//add controllers: main/home and auth

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//routes

router.get("/", async (req, res) => {
    res.render("test.ejs");
  }) 
  
  //--> main controller or home controller
//router.get("/login") //auth controller
//router.get("/signup") //auth controller
//router.get("/logout", ensureAuth, authController.logout) //auth controller

//export
module.exports = router;


