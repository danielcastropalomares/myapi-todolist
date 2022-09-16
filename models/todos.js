const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('todos', subscribersSchema)