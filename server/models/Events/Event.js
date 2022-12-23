import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    Host: {
        type: mongoose.Types.ObjectId,
        ref: 'EventHost'
    },
    AdminId: {
        type: mongoose.Types.ObjectId,
        ref: 'Admin'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    Tags : {
        type : Array,
        default: []
    },
    Seats : {
        type : Number,
        default : 0
    },
    EventDate : {
        type : Date,
        required : true  
    },
    MeetLink : {
        type : String,
        required : true
    }
}, { timestamps: true });

export default mongoose.model('Event', EventSchema);