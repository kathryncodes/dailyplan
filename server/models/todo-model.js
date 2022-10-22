const mongoose = require('mongoose');
const moduleSchema = require('./modules');
const { v4: uuidv4 } = require('uuid');

const itemSchema = new mongoose.Schema({
    text:{
        type: String
    },
    priority:{
        type: String,
        enum:['low', 'high', '']
    },
    dueDate: {
        type: Date    
    },
    completed:{
        type: Boolean,
        default: false
    },
    id:{
        type: String,
        default: uuidv4
    }
})

const TodoSchema =  new mongoose.Schema({

    items: [itemSchema]
})


module.exports = mongoose.model('todoListModel', TodoSchema );
module.exports = moduleSchema.discriminator('todo', TodoSchema)