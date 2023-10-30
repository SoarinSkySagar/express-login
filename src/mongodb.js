const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://sagarranapvt:9JP9R8VCP@express-login.ul4xmzg.mongodb.net/userData').then(() => {
    console.log('MongoDB connected successfully')
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