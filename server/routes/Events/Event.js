import express from 'express';
import AdminAuth from '../../middleware/AdminAuth.js';
const Router = express.Router();


import {
    CreateNewEvent, DeleteEvent, UpdateEvent, UpdateEventHost, GetMyEvents
} from '../../controllers/Events/Event.js';

Router.route('/createEvent').post(AdminAuth, CreateNewEvent)
Router.route('/deleteEvent/:id').delete(AdminAuth, DeleteEvent)
Router.route('/updateEvent/:id').put(AdminAuth, UpdateEvent)
Router.route('/updateEventHost/:id').put(AdminAuth, UpdateEventHost)
Router.route('/getMyEvents').get(AdminAuth, GetMyEvents)

export default Router;