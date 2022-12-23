import jwt from 'jsonwebtoken';
const { JWT_SECRET_ADMIN } = process.env;
import Admin from '../models/Admin.js';

const AdminAuth = async (req, res, next) => {
    const token = req.header("x-access-token") || req.body.token || req.query.token
    if (!token) {
        return res.status(401).send("Access Denied");
    }
    try {
        const verified = jwt.verify(token, JWT_SECRET_ADMIN);
        req.admin = await Admin.findOne({ _id: verified._id });
        next();
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export default AdminAuth;