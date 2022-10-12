const todoListModel = require('../models/todo-model');
const modules = require('../models/modules');

module.exports = {
    getList: async (req, res) => {
        //find the list by id and render to dashboard
        try{
            const list = await modules.findById(req.params.moduleID);
            //render list to dashboard 

        }
        catch(err){
            console.log(err)
        }
    },
    newList : async (req, res) => {
        try{
             await modules.create({
                moduleType: req.body.moduleType
            }) 
        }
        catch(err){
            console.log(err)
        }

    },
    addItem: async(req, res) => {
        try{
            
            const list = await modules.findOneAndUpdate({_id: req.params.moduleID}, {
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
            await modules.findOneAndDelete({_id: req.params.moduleID})
            console.log("Deleted list!")
            res.json('list deleted')
            //find the list by id and delete 
            // findOneAndDelete(req.params.id)
            //render updated dashboard
        }
        catch(err){
            console.log(err)
        }
    }
}
