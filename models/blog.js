const mongoose = require('mongoose');

const blogSchema = new mongoonse.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "عمومی",
        enum: ["عمومی","خصوصی"]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt:{
        Type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Blog" , blogSchema);