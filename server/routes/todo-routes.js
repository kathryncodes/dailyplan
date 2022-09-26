const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

//also add auth

//ROUTES
    //      /addList --> new instance of module

    //      /addItem --> add a list item
    //      /editItem/:id --> edit list item
    //      /deleteItem/:id --> delete list item
    //      /checkItem/:id  --> complete list item (checkbox)
    //      /uncheckItem/:id --> uncheck check box

    //      /delete/:id --> delete module

    module.exports = router;