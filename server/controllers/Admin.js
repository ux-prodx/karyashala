import Admin from "../models/Admin.js";
import Jobs from "../models/Jobs.js";
import jwt from "jsonwebtoken";
import encryption from "../middleware/encryption.js";

const{ JWT_SECRET_ADMIN } = process.env ;

export const AdminResiter = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (admin) {
        return res.status(400).json({ message: "Admin already exists" });
    }
    const hashedPassword = encryption(password);
    const newAdmin = new Admin({...req.body, password: hashedPassword});
    await newAdmin.save();
    const token = jwt.sign({ _id: newAdmin._id }, JWT_SECRET_ADMIN,
        { expiresIn: "1d" }
    );
    res.status(201).json({ message: "Admin created successfully", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const AdminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin || encryption(password) != admin.password) {
            return res.status(400).json({ message: "Admin does not exist" });
        }
        const token = jwt.sign({ _id: admin._id }, JWT_SECRET_ADMIN,
            { expiresIn: "1d" }
        );
        res.status(200).json({ message: "Admin logged in successfully", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const CreateNewJob = async (req, res) => {
    const { title, icon, remaining, tags } = req.body;
    try {
        const newJob = new Jobs({ ...req.body, creator: req.admin._id });
        await newJob.save();
        res.status(201).json({ message: "Job created successfully", newJob });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const DeleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Jobs.findOne({$and: [{ _id: id }, { creator: req.admin._id }]});
        if (!job) {
            return res.status(400).json({ message: "Job does not exist" });
        }
        await job.remove();
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const UpdateJob = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Jobs.findOne({$and: [{ _id: id }, { creator: req.admin._id }]});
        if (!job) {
            return res.status(400).json({ message: "Job does not exist" });
        }
        await job.updateOne({ ...req.body, creator: req.admin._id });
        res.status(200).json({ message: "Job updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const GetJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({ creator: req.admin._id });
        res.status(200).json({ message: "Jobs fetched successfully", jobs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};