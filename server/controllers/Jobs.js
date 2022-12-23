import Jobs from "../models/Jobs.js";


export const GetAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find();
        res.status(200).json({ message: "All jobs", jobs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetJobById = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Jobs.findOne({ _id: id });
        res.status(200).json({ message: "Job fetched successfully", job });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const GetJobsByTag = async (req, res) => {
    const { tag } = req.params;
    try {
        const jobs = await Jobs.find({ tags: tag });
        res.status(200).json({ message: "Jobs fetched successfully", jobs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
