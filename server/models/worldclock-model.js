const mongoose = require('mongoose');
const moduleSchema = require('./modules');
const { v4: uuidv4 } = require('uuid');

const timezoneSchema = new mongoose.Schema({
    city : {
        type: String
     },
     country : {
         type: String
    }
    ,
    id:{
        type: String,
        default: uuidv4
    }
})


const worldClockSchema = new mongoose.Schema({
    timezones : [timezoneSchema]

})

module.exports = mongoose.model('worldClockModel', worldClockSchema);
module.exports = moduleSchema.discriminator('worldclock', worldClockSchema);