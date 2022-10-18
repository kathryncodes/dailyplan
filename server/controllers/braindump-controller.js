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
            await modules.create({
                moduleType : req.body.moduleType
            })
            req.reload('/dashboard')
        }
        catch(err){
            console.log(err)
        }
    },

    editTitle : async (req, res) => {

        try{
            const braindump = await modules.findOneAndUpdate({_id: req.params.id}, {
                $set: {
                    title: req.body.title 
                }
            })
            braindump.save()
            res.json(braindump)
            }
        
        catch(err){
            console.log(err)
        }
    
    }, 

    editText : async (req, res) => {

        try{
            const braindump = await modules.findOneAndUpdate({_id: req.params.id}, {
                $set: {
                    text: req.body.text
                }
            })
            braindump.save()
            res.json(braindump)
        }
        catch(err){
            console.log(err)
        }

    },
    deleteBrainDump : async (req, res) => {
        try{
            await modules.findOneAndDelete({_id: req.params.id})
            console.log("Braindump deleted")
            res.json('braindump deleted')
        }
        catch(err){
            console.log(err)
        }
    }
}