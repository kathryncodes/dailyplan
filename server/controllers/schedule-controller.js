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
        await modules.create({
            moduleType: req.body.moduleType
        })
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
        const schedule = await modules.findById({_id: req.params.id})
        schedule.blocks.push(newBlock)
        schedule.save()
        res.json(schedule)
    }
    catch(err){
        console.log(err)
    }
 
    },
    deleteBlock : async (req, res) => {

        try{
            const schedule = await modules.findById({_id: req.params.scheduleID});
            const block = schedule.blocks.indexOf({_id: req.params.blockID})
            schedule.blocks.splice(block, 1)
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
            await modules.findOneAndDelete({_id: req.params.id})
            console.log("Deleted schedule!")
            res.json('schedule deleted')
        }
        catch(err){
            console.log(err)
        }
    }
}