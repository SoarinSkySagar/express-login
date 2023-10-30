const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/newdb').then(() => {
    console.log('MongoDB connected')
}).catch(() => {
    console.log('Failed to connect to MongoDB')
})

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model('users', loginSchema)

module.exports = collection