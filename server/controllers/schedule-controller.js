const scheduleModel = require('../models/schedule-model')
const modules = require('../models/modules')

module.exports = {
    getSchedule : async (req, res) => {

        try{
            const schedule = await modules.findById({_id: req.params.id})
            res.json(schedule)
        }
        catch(err){
            console.log(err)
        }

    }, 
    newSchedule : async (req, res) => {
      
    try{
        const newSched = await modules.create({
            moduleType: req.body.moduleType
        })

        res.json(newSched)
    } 
    catch(err){
        console.log(err)
    }  
     
    },
    addBlock : async (req, res) => {
       
        const newBlock = {
            task: req.body.task,
            hours: req.body.hours,
            minutes: req.body.minutes
        }

    try{
        const schedule = await modules.findOne({_id: req.params.id})
        schedule.blocks.push(newBlock)
        schedule.save()
       
        console.log(schedule)
        res.json(schedule)

    }
    catch(err){
        console.log(err)
    }
 
    },
    deleteBlock : async (req, res) => {

        try{
            const schedule = await modules.findOne({_id: req.params.scheduleID});
            schedule.blocks.pull({_id: req.params.blockID})
            schedule.save()
            console.log("block should have been deleted")
            console.log(schedule.blocks)  
            res.json(schedule)
        }
        catch(err){
            console.log(err)
        }

    },
    deleteSchedule : async(req, res) => {
        try{
            const schedule = await modules.findOneAndDelete({_id: req.params.id})
            console.log("Deleted schedule!")

            res.json(schedule)
        }
        catch(err){
            console.log(err)
        }
    }
}