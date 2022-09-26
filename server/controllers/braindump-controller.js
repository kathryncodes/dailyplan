const braindump = require('../models/braindump-model');
//const moduleCollection = require('../models/modules');

module.exports = {
    getBrainDump : async (req, res) => {
        //find braindump by id
        //render to dashboard
    },
    newBrainDump : async(req, res) => {
        try{
            const newBraindump = await braindump.create({
                title: req.body.title,
                text: req.body.text
            })
            res.redirect("/")
            //redirect to updated dashboard with empty braindump module
        }
        catch(err){
            console.log(err)
        }
    },
    editTitle : async (req, res) => {
        //find braindump by id
        //replace title with text from input
        //render to dashboard
    }, 
    editText : async (req, res) => {
        //find braindump by id
        //replace text with text from input
        //render to dashboard
    },
    deleteBrainDump : async (req, res) => {
        //find by id and delete
        //redirect to dashboard
    }
}