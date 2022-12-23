import express from 'express';

const Router = express.Router();
import AdminAuth from '../middleware/adminAuth.js';

import {
    AdminLogin, AdminResiter, CreateNewJob, DeleteJob, GetJobs, UpdateJob,
} from '../controllers/Admin.js';

import {
    DeleteReview, GetReviewById, GetAllReviews, UpdateReview,
} from "../controllers/Reviews/Reviews.js"

Router.route('/register').post(AdminResiter);
Router.route('/login').post(AdminLogin);

Router.route('/jobs').post(AdminAuth, CreateNewJob)
    .get(AdminAuth, GetJobs);
Router.route('/jobs/:id').delete(AdminAuth, DeleteJob)
    .patch(AdminAuth, UpdateJob);
Router.route('/reviews').get(AdminAuth, GetAllReviews)
    .delete(AdminAuth, DeleteReview)
    .patch(AdminAuth, UpdateReview);
Router.route('/reviews/:id').get(AdminAuth, GetReviewById);

export default Router;