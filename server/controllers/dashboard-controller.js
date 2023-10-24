const modules = require('../models/modules')

module.exports = {
    getDashboard: async (req, res) => {
        try{
            const modulesArray = await modules.find();
             console.log(modulesArray);
            res.send(modulesArray);
        }
        catch(err){
            console.log(err)
        }
        
    }
};



