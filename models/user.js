const { date } = require('@hapi/joi/lib/template')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
        min: 6,
        max: 255
    },
    lastname: {
        type: String, 
        required: true,
        min: 6,
        max: 255
    },
    age: {
        type: Number, 
        required: true
    },
    address: {
        type: String, 
        required: true,
        max: 255
    },
    date: {
        type: Date, 
        default: date.now
    },
    password: {
        type: String, 
        required: true,
        minlenght: 6
    }
})

module.exports = mongoose.model('User', userSchema)