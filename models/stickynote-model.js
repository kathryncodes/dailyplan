const mongoose = require('mongoose');

const stickyNoteSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('stickyNote', stickyNoteSchema);