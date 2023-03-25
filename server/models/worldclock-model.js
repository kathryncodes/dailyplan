const mongoose = require('mongoose');
const moduleSchema = require('./modules');

const worldClockSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    }

})

module.exports = mongoose.model('worldClockModel', worldClockSchema);
module.exports = moduleSchema.discriminator('worldclock', worldClockSchema);