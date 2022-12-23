import express from 'express';

const Router = express.Router();

import UserAuth from '../middleware/userAuth.js';

import {
    UserLogin, UserRegister, DeleteAccount, UpdatePassword, UpdateProfile, UserProfile
} from '../controllers/User.js';

Router.route('/register').post(UserRegister);
Router.route('/login').post(UserLogin);

Router.route('/profile/password').patch(UserAuth, UpdatePassword);

Router.route('/profile')
    .get(UserAuth, UserProfile)
    .patch(UserAuth, UpdateProfile)
    .delete(UserAuth, DeleteAccount);


export default Router;