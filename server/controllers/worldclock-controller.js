const worldClockModel = require('../models/worldclock-model')
const modules = require('../models/modules')

module.exports = {
    
    getWorldClock: async(req, res) => {
        try{
            const worldclock = await modules.findById({_id: req.params.id})
            res.json(worldclock)
        }
        catch(err){
            console.log(err)
        }
    },

    newWorldClock : async(req, res) => {
        try{
            const newWorldClock = await modules.create({
                moduleType : req.body.moduleType
            })
            res.json(newWorldClock)
        }
        catch(err){
            console.log(err)
        }
    },

    addTimezone : async(req, res) => {
        try{
            const addTimezone = await modules.create({
                moduleType : req.body.moduleType
            })
            res.json(addTimezone)
        }
        catch(err){
            console.log(err)
        }
    },

    deleteTimezone : async(req, res) => {
        try{
            const deleteTimezone = await modules.create({
                moduleType : req.body.moduleType
            })
            res.json(deleteTimezone)
        }
        catch(err){
            console.log(err)
        }
    },

    deleteWorldClock : async(req, res) => {
        try{
            const worldclock =  await modules.findOneAndDelete({_id: req.params.id})
        console.log("Timer deleted")
        res.json(worldclock)
        }
        
        catch(err){
            console.log(err)
        }
    }

}