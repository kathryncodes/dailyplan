const braindumpModel = require('../models/braindump-model')
const modules = require('../models/modules')

module.exports = {
    getBrainDump : async (req, res) => {

        try{
            const braindump = await modules.findById({_id: req.params.id})
            res.json(braindump)
        }
        catch(err){
            console.log(err)
        }

    },
    newBrainDump : async(req, res) => {
        try{
            const newBD = await modules.create({
                moduleType : req.body.moduleType
            })
            res.json(newBD)
        }
        catch(err){
            console.log(err)
        }
        
    },
    editText : async (req, res) => {
        console.log(typeof req.body.text)
        console.log(req.body.text)
        try{
            const braindump = await modules.findOne({_id: req.params.id})
            braindump.text = req.body.text
            braindump.save()
            res.json(braindump)
        }
        catch(err){
            console.log(err)
        }

    },
    deleteBrainDump : async (req, res) => {
        try{
           const braindump =  await modules.findOneAndDelete({_id: req.params.id})
            console.log("Braindump deleted")

            res.json(braindump)
        }
        catch(err){
            console.log(err)
        }
    }
}