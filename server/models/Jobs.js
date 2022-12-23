import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    remaining: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        default: []
    }, 
}, {timestamps : true});

export default mongoose.model('Job', jobSchema);