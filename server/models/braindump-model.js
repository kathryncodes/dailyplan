const mongoose = require('mongoose');
const moduleSchema = require('./modules');

const braindumpSchema = new mongoose.Schema({
    text:{
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('braindumpModel', braindumpSchema);
module.exports = moduleSchema.discriminator('braindump', braindumpSchema);