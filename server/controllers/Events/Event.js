import Event from "../../models/Events/Event";
import Host from "../../models/Events/Host";
import Admin from "../../models/Admin";
import { AllValidations } from "../../utils/validation";

export const CreateNewEvent = async (req, res) => {
    const { 
        title, Tags, image, date, Seats, EventDate, 
        HostName, HostTitle, HostImage, MeetLink, 
    } = req.body;
    try {
        let validiate = AllValidations({ title, date, Seats, EventDate, MeetLink, 
                HostName, HostTitle, admin : req.admin._id });
        if (validiate.status) {
            return res.status(400).json({ status: false, message: validiate.message });
        }
        const newHost = new Host({ name : HostName, title : HostTitle, image : HostImage });
        const newEvent = await Event.create({title, Tags, image, date, Seats, 
                EventDate, MeetLink, Host : newHost._id, Admin : req.admin._id});
        await newHost.save();
        await Admin.findOneAndUpdate({ _id: req.admin._id }, { $push: { Events: newEvent._id } });
        res.status(201).json({ status: true, newEvent });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const DeleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findOne({$and: [{ _id: id }, { Admin: req.admin._id }]});
        if (!event) {
            return res.status(400).json({ status: false, message: "Event does not exist" });
        }
        await event.delete();
        await Admin.findOneAndUpdate({ _id: req.admin._id }, { $pull: { Events: event._id } });
        res.status(200).json({ status: true, message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const UpdateEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const { title, Tags, image, date, Seats, EventDate, MeetLink } = req.body;
        let validiate = AllValidations({ title, date, Seats, EventDate, MeetLink });
        if (validiate.status) {
            return res.status(400).json({ status: false, message: validiate.message });
        }
        let event = await Event.findOne({$and: [{ _id: id }, { Admin: req.admin._id }]});
        if (!event) {
            return res.status(400).json({ status: false, message: "Event does not exist" });
        }
        event = await event.updateOne({ title, Tags, image, date, Seats, EventDate, MeetLink });
        res.status(200).json({ status: true, event });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const UpdateEventHost = async (req, res) => {
    const { id } = req.params;
    try {
        const { HostName, HostTitle, HostImage } = req.body;
        let validiate = AllValidations({ HostName, HostTitle });
        if (validiate.status) {
            return res.status(400).json({ status: false, message: validiate.message });
        }
        let event = await Event.findOne({$and: [{ _id: id }, { Admin: req.admin._id }]});
        if (!event) {
            return res.status(400).json({ status: false, message: "Event does not exist" });
        }
        let host = await Host.findOne({ _id: event.Host });
        if (!host) {
            return res.status(400).json({ status: false, message: "Host does not exist" });
        }
        host = await host.updateOne({ name : HostName, title : HostTitle, image : HostImage });
        res.status(200).json({ status: true, host });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const GetMyEvents = async (req, res) => {
    try {
        const events = await Event.find({ Admin: req.admin._id });
        res.status(200).json({ status: true, events });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}
