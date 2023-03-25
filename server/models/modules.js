const mongoose = require("mongoose");

const schemaOptions = {
    discriminatorKey: 'moduleType',
    collection: 'modules'
}

const moduleSchema = new mongoose.Schema({
    moduleType:{
        type: String,
        required: true,
        enum: ["schedule", "todo", "braindump", "reminders", "timer", "worldclock"]
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required: true
    }
}, schemaOptions)

module.exports = mongoose.model('moduleSchema', moduleSchema)