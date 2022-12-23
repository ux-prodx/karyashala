import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import encryption from '../middleware/encryption.js';

const { JWT_SECRET_USER } = process.env;

export const UserRegister = async (req, res) => {
    const {email, password, username } = req.body;
    try {
        const user = await User.findOne({$or : [{ email }, { username }]})
            .select({_id : true});
        if(user) {
            return res.status(400).json({error : "User already exists"});
        }
        const newUser = new User({...req.body, password : encryption(password)});
        await newUser.save();
        const token = jwt.sign({_id : newUser._id}, JWT_SECRET_USER, 
            {expiresIn : '1d'}
        );
        return res.status(201).json({message : "User Account Created", token});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}


export const UserLogin = async (req, res) => {
    const {search, password} = req.body;
    try {
        const user = await User.findOne({$or: [{email : search}, {username : search}]});
        if(!user || encryption(password) != user.password) {
            return res.status(400).json({error : "User does not exist"});
        }
        const token = jwt.sign({_id : user._id}, JWT_SECRET_USER,
            {expiresIn : '1d'}
        );
        return res.status(200).json({message : "User logged in successfully", token});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}

export const UserProfile = (req, res) => {
    try {
        return res.status(200).json({user : req.user});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}

export const UpdateProfile = async (req, res) => {
    const {name, username, email, phone} = req.body;
    try {
        await User.updateOne({_id : req.user._id}, {$set : {name, username, email, phone}});
        return res.status(200).json({message : "Profile updated successfully"});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}

export const UpdatePassword = async (req, res) => {
    const { newPassword } = req.body;
    try {
        await User.updateOne({_id : req.user._id}, {$set : {password : encryption(newPassword)}});
        return res.status(200).json({message : "Password updated successfully"});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}

export const DeleteAccount = async (req, res) => {
    try {
        await User.deleteOne({_id : req.user._id});
        return res.status(200).json({message : "Account deleted successfully"});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}