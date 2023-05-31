const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 45
    },
    password: {
        type: String,
        required: true,
        min:6,
        max:225 
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('User', UserSchema, 'user')