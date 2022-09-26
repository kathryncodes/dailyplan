const todoList = require('../models/todo-model');
//const moduleCollection = require('../models/modules');

module.exports = {
    getList: async (req, res) => {
        //find the list by id and render to dashboard
        try{
            const list = await todoList.findById(req.params.id);
            //render list to dashboard 
        }
        catch(err){
            console.log(err)
        }
    },
    newList : async (req, res) => {
        try{
            //create new list in db
            //render empty list on page
            const list = await todoList.create({
                //does anything go in here if we are adding items separately?
            }) 
        }
        catch(err){
            console.log(err)
        }

    },
    addItem: async(req, res) => {
        try{
            //get the list by id (in case of multiple lists on page)
            //push an item to the items array
            //render updated list on dashboard

            const list = await todoList.findOneAndUpdate({_id: req.params.id}, {
                $push: {
                    items : {
                        'text' : req.body.text ,
                        'priority' : req.body.priority,
                        'dueDate' : req.body.dueDate,
                        'completed' : false
                    }
                }
            })
            
            
        }
        catch(err){
            console.log(err)
        }

    },
    checkItem: async (req, res) => {
        try{
            //get the list by id
            //get the list item (by array index?)
            //set the value for completed to false
            //render updated list on dashboard (style changes for checkbox)
        }
        catch(err){
            console.log(err)
        }

    },
//uncheck item???
    deleteItem: async(req, res) => {
        try{
            //get the list by id (in case of multiple lists in dashboard)
            //find the list item (by array index??)
            //delete the item
            //render updated list to dashboard (item removed)
        }
        catch(err){
            console.log(err)
        }

    },
    deleteList: async (req, res) => {
        try{
            //find the list by id and delete 
            // findOneAndDelete(req.params.id)
            //render updated dashboard
        }
        catch(err){
            console.log(err)
        }
    }
}
