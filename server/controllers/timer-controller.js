const timerModel = require('../models/timer-model')
const modules = require('../models/modules')

module.exports = {
    
    getTimer: async(req, res) => {
        try{
            const timer = await modules.findById({_id: req.params.id})
            res.json(timer)
        }
        catch(err){
            console.log(err)
        }
    },

    newTimer : async(req, res) => {
        try{
            const addTimer = await modules.create({
                moduleType : req.body.moduleType
            })
            res.json(addTimer)
        }
        catch(err){
            console.log(err)
        }
    },

    deleteTimer : async(req, res) => {
        try{
            const timer =  await modules.findOneAndDelete({_id: req.params.id})
        console.log("Timer deleted")
        res.json(timer)
        }
        
        catch(err){
            console.log(err)
        }
    }

}