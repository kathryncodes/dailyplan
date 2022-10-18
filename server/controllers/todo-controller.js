const { listenerCount } = require('../models/modules');
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
            const list = await modules.findOneAndUpdate(
                {_id: req.params.id}, //this is finding the right list

                { $push : {
                    "items" : newItem
                  }} //this should push newItem to the items array but it's not working

            ) 
            
            console.log(newItem) //this returns the right item
            console.log(list) //this returns the correct list
            console.log(typeof list) //this says it's an object
            console.log(`This should be the items array, using list.items  ${list.items}`) //this returns undefined
            res.json(list) 
        }
        catch(err){
            console.log(err)
        }

    },
    checkItem: async (req, res) => {
        try{
  
            //const todoItem = await list.items.findById({}) ???
            
            //set the value for completed to false
            //render updated list on dashboard (style changes for checkbox)
        }
        catch(err){
            console.log(err)
        }

    },
    deleteItem: async(req, res) => {
        try{
          const list = await modules.findById({_id: req.params.listID})
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
