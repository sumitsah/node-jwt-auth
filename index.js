const express = require('express');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/userPosts');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

//middleware (First parse the request and let request go to serve)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//(Import routes above) Route Middleware 
app.use('/api/user',authRouter);
app.use('/api/posts', userRouter);


dotenv.config();

//Connect to DB
// mongoose.connect( `mongodb+srv://admin_user:9827671142@cluster0.nn0r3.mongodb.net/test?retryWrites=true`,
// { useNewUrlParser: true, useUnifiedTopology: true})
//     .then( () => console.log('Connected to MongoDB..'))
//     .catch( (err) => console.log(err) );s



PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));