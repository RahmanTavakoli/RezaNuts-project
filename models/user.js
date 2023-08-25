const mongoose = require('mangoose');

const UserSchima = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,

    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model("User" , UserSchima);

module.exports = User;