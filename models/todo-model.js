const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        enum:['low', 'high']
    },
    dueDate: {
        type: Date
    },
    completed:{
        type: Boolean,
        default: false
    }
})

const TodoSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: true, 
        default: "To Do"
    },
    items: [itemSchema]
    
})



module.exports = mongoose.model('todoList', TodoSchema );