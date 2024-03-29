const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

//also add auth

router.post("/newList", todoController.newList)

router.get("/getList/:id", todoController.getList)

router.put("/addItem/:id", todoController.addItem) 

router.put("/deleteItem/:listID&:itemID", todoController.deleteItem)

router.delete("/deleteList/:id", todoController.deleteList)

//ROUTES
    //      /addList --> new instance of module

    //      /addItem --> add a list item
    //      /editItem/:id --> edit list item
    //      /deleteItem/:id --> delete list item
    //      /checkItem/:id  --> complete list item (checkbox)
    //      /uncheckItem/:id --> uncheck check box

    //      /delete/:id --> delete module

    module.exports = router;