const mongoose = require('mongoose');
const moduleSchema = require('./modules');
const { v4: uuidv4 } = require('uuid');

const block = new mongoose.Schema({
    task:{
        type: String
    },
    hours:{
        type: Number
        //required: true
    }, 
    minutes: {
        type: Number
    },
   id:{
    type: String,
    default: uuidv4
   }
});

const scheduleSchema =  new mongoose.Schema({

    blocks: [block]
})

module.exports = mongoose.model('scheduleModel', scheduleSchema);
module.exports = moduleSchema.discriminator('schedule', scheduleSchema);