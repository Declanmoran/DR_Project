import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express ();

//allow limit of 30MB as images will be used and require more space
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//Set access of posts to localhost:5000/posts
app.use('/posts', postRoutes);


//Connect to MongoDB Database
const CONNECTION_URL = 'mongodb+srv://declanmoran:300698@cluster0.62rej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//Connect to port
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then (() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

    

   