const mongoose = require('mongoose')
const moment = require('moment')
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

UserSchema.method('toJSON', function () {
    const {_id, ...object} = this.toObject()
    object.id = _id
    object.created_date = moment(object.created_date).format('DD-MM-YYYY HH:mm:ss')
    if (object.modified_date != null) {
        object.created_date = moment(object.modified_date).format('DD-MM-YYYY HH:mm:ss')
    }
    return object
})

module.exports = mongoose.model('User', UserSchema, 'user')