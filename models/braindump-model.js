const mongoose = require('mongoose');

const braindumpSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('braindump', braindumpSchema);