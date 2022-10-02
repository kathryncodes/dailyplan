const modules = require('../models/modules')

module.exports = {
    getDashboard: (req, res) => {
        // find all modules and render to dashboard?
        res.render("index.ejs");
    }
};



