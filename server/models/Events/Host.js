import mongoose from 'mongoose';

const EventHostSchema = new mongoose.Schema({
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
    }
}, { timestamps: true });

export default mongoose.model('EventHost', EventHostSchema);