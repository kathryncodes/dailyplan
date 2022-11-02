const mongoose = require('mongoose');
const moduleSchema = require('./modules');

const timerSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('timerModel', timerSchema);
module.exports = moduleSchema.discriminator('timer', timerSchema);