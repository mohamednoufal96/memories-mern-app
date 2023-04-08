import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import env from 'dotenv' ;
env.config();

import postsRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postsRoutes);

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: "true", useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {console.log(`---------Server connected to port ${PORT} succesful--------`)})
    })
    .catch((error) => console.log(error.message));
    

// mongoose.set('useFindAndModify', true);
