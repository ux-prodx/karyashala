import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import AdminRoutes from './routes/Admin.js';
import UserRoutes from './routes/User.js';
import JobRoutes from './routes/Jobs.js';
import ReviewRoutes from './routes/Reviews/reviews.js';

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(cors());
app.use(morgan('dev'));
dotenv.config();

app.use('/admin', AdminRoutes);
app.use('/user', UserRoutes);
app.use('/job', JobRoutes);
app.use('/review', ReviewRoutes);

mongoose.connect( process.env.MongoUrl , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on ${process.env.PORT}`)))
    .catch((error) => console.log('DataBase error', error.message));

mongoose.set('useFindAndModify', false);