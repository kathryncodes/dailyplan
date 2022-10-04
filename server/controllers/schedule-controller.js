const scheduleModel = require('../models/schedule-model');
const modules = require('../models/modules')

module.exports = {
    getSchedule : async (req, res) => {
        //find schedule by id
        const schedule = await modules.findById(req.params.id)
        //render to dashboard
    }, 
    newSchedule : async (req, res) => {
        //create new empty schedule
    try{
        await modules.create({
            moduleType: req.body.moduleType
        })
    } 
    catch(err){
        console.log(err)
    }  
        //render to dashboard
    },
    addBlock : async (req, res) => {
        //find schedule by id 
        const schedule = await modules.findOneAndUpdate({_id: req.params.id}, {
            $push: {
                blocks: {
                    task: "", 
                    duration: ""
                }
            }
        })
        //push new block to blocks array
    },
    deleteBlock : async (req, res) => {
        //find schedule by id
        const schedule = await modules.findById();
        //find block (by array index?)
        //remove block from blocks array
        //render dashboard
    },
    deleteSchedule : async(req, res) => {
        //find schedule by id
        //delete schedule
        await modules.findOneAndDelete({_id: req.params.id})
        //render dashboard
        res.redirect("/dashboard")
    }
}