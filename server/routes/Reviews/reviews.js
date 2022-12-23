import express from 'express';

const Router = express.Router();

import {
    CreateReview
} from '../../controllers/Reviews/Reviews.js';

Router.route("/CrerteNewReview").post(CreateReview);

export default Router;