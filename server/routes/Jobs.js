import express from 'express';

import UserAuth from '../middleware/userAuth.js';
import {
    GetAllJobs, GetJobById, GetJobsByTag
} from '../controllers/Jobs.js';

const Router = express.Router();

Router.route('/jobs').get(UserAuth, GetAllJobs);
Router.route('/jobs/:id').get(UserAuth, GetJobById);
Router.route('/jobs/tag/:tag').get(UserAuth, GetJobsByTag);

export default Router;