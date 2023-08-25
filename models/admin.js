const mongoose = require('mangoose');

const AdminSchima = new mongoose.Schema({
    fullname:{
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

const Admin = mongoose.model("Admin" , AdminSchima);

module.exports = Admin;