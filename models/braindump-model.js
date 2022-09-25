const mongoose = require('mongoose');
//const moduleSchema = require('./modules');

const braindumpSchema = new mongoose.Schema({
    title:{
        type:String,
        default: "Brain Dump"
    },
    text:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

// const braindumpSchema = moduleSchema.discriminator("braindump", new mongoose.Schema({
//     title:{
//         type:String,
//         default: "Brain Dump"
//     },
//     text:{
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: new Date()
//     }
// }))

module.exports = mongoose.model('braindump', braindumpSchema);