import jwt from 'jsonwebtoken';
const { JWT_SECRET_USER } = process.env;
import User from '../models/User.js';

const AdminAuth = async (req, res, next) => {
    const token = req.header("x-access-token") || req.body.token || req.query.token
    if (!token) {
        return res.status(401).send("Access Denied");
    }
    try {
        const verified = jwt.verify(token, JWT_SECRET_USER);
        req.user = await User.findOne({ _id: verified._id });
        next();
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

export default AdminAuth;