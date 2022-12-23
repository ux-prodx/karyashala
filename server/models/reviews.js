import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    message : {
        type : String,
        required : true
    }
}, { timestamps: true });

export default mongoose.model('Review', ReviewSchema);