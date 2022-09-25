const mongoose = require('mongoose');
//const moduleSchema = require('./modules')

const block = new mongoose.Schema({
    startTime:{
        type: Date,
        required: true
    }, 
    endTime:{
        type: Date,
        required: true
    },
    text:{
        type: String
    },
    upcoming:{
        type: Boolean, 
        default: true
    }
});

const scheduleSchema = new mongoose.Schema({

    title: {
        type: String,
        default: "Today's plan"
        //default = Day, Month ??
    },
    blocks: [block]
})

module.exports = mongoose.model('schedule', scheduleSchema);