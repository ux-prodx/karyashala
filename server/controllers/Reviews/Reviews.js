import Reviews from "../../models/Reviews.js";
import { AllValidations } from "../../utils/validation.js";
 
export const CreateReview = async (req, res) => {
    const { title, name, image, message } = req.body;
    try {
        let dataCheck = AllValidations({ title, name, image, message });
        if (!dataCheck.status) {
            return res.status(400).json({ message: dataCheck.message });
        }
        const newReview = new Reviews({ ...req.body });
        await newReview.save();
        res.status(201).json({ status: true, newReview });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const GetAllReviews = async (req, res) => {
    try {
        const reviews = await Reviews.find();
        res.status(200).json({ status: true, reviews });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const GetReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Reviews.findOne({ _id: id });
        res.status(200).json({ status: true, review });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const DeleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Reviews.findOne({ _id: id });
        if (!review) {
            return res.status(404).json({ status: false, message: "Review not found" });
        }
        await Reviews.findByIdAndRemove(id);
        res.status(200).json({ status: true, message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}

export const UpdateReview = async (req, res) => {
    const { id } = req.params;
    const { title, name, image, message } = req.body;
    try {
        let dataCheck = AllValidations({ title, name, image, message });
        if (!dataCheck.status) {
            return res.status(400).json({ message: dataCheck.message });
        }
        const review = await Reviews.findOne({ _id: id });
        if (!review) {
            return res.status(404).json({ status: false, message: "Review not found" });
        }
        await Reviews.findByIdAndUpdate(id, { ...req.body });
        res.status(200).json({ status: true, message: "Review updated successfully" });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
}
