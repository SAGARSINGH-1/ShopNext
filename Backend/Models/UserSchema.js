const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        required: true,
        default: 'user'
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    }
})


const User = mongoose.model("Accounts", UserSchema)

module.exports = User