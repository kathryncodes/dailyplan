const mongoose = require('mongoose');
//const moduleSchema = require('./modules')

const remindersSchema = new mongoose.Schema({
    items: [reminderItemsSchema]
}) 

const reminderItemsSchema = new mongoose.Schema({
    date: {
        type: Date //check date formatting
        //required: true
    },
    time: {
        type: String //double check this --> how is time formatted?
    },
    text: {
        type: String
        //required: true
    }
})

// const remindersSchema = moduleSchema.discriminator("reminders", new mongoose.Schema({
//     items: [reminderItemsSchema]
// }))

module.exports = mongoose.model('reminders', remindersSchema );
