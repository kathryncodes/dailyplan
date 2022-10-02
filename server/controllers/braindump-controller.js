const braindumpModel = require('../models/braindump-model');
const modules = require('../models/modules')

module.exports = {
    getBrainDump : async (req, res) => {
        //find braindump by id
        const braindump = await modules.find({"moduleType" : "braindump"}, {_id: req.params.id})
        //render to dashboard
    },
    newBrainDump : async(req, res) => {
        try{
            await modules.create({
                moduleType: "braindump",
                text: req.body.text
            }) //create blank braindump
            console.log(req.body)
            res.redirect("/")
            //redirect to updated dashboard with empty braindump module
        }
        catch(err){
            console.log(err)
        }
    },
    editTitle : async (req, res) => {
        //find braindump by id
        const braindump = await modules.findOneAndUpdate({_id: req.params.id}, {
            $set: {
                title: req.body.braindumpTitle //ensure this gets value from input???
            }
        })
        //replace title with text from input

        //render to dashboard
    }, 
    editText : async (req, res) => {
        //find braindump by id
        const braindump = await modules.findOneAndUpdate({_id: req.params.id}, {
            $set: {
                text: req.body.braindumpText
            }
        })
        //replace text with text from input
        //render to dashboard
    },
    deleteBrainDump : async (req, res) => {
        //find by id and delete
        await modules.findOneAndDelete({_id: req.params.id})
        //redirect to dashboard
    }
}