import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Events: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Event'
        }
    ]
}, { timestamps: true });

export default mongoose.model('Admin', adminSchema);