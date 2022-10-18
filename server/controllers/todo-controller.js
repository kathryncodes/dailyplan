const todoListModel = require('../models/todo-model')
const modules = require('../models/modules');

module.exports = {
    getList: async (req, res) => {
        //find the list by id and render to dashboard
        try{
            const list = await modules.findById({_id: req.params.id})
            res.json(list)
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

        const newItem = { 
            text : req.body.text, 
            priority : req.body.priority,
            dueDate : req.body.dueDate,
            completed : false
            }


        try{  
            const list = await modules.findOne({_id: req.params.id}) 
            list.items.push(newItem) //this works but isn't using Mongo operators??
            list.save()
            
            console.log(newItem) 
            console.log("list: ")
            console.log(list) 
           
            res.json(list) 
        }
        catch(err){
            console.log(err)
        }

    },
    checkItem: async (req, res) => {
        try{
  
            //const todoItem = await list.items.findById({}) ???
            
            //set the value for completed to true
            //render updated list on dashboard (style changes for checkbox)
        }
        catch(err){
            console.log(err)
        }

    },
    deleteItem: async(req, res) => {
        try{
          const list = await modules.findOne({_id: req.params.listID})
          list.items.pull({_id: req.params.itemID})
          list.save()
          console.log(list)
          console.log(list.items)
          res.json(list)
        }
        catch(err){
            console.log(err)
        }

    },
    deleteList: async (req, res) => {
        try{
            await modules.findOneAndDelete({_id: req.params.id})
            console.log("Deleted list!")
            res.json('list deleted')
        }
        catch(err){
            console.log(err)
        }
    }
}