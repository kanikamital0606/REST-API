const express = require('express'); 
const app = express(); //execute
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());

//import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
// app.use('/user', userRoute);
 
//ROUTES
app.get('/', (req, res) => { 
    res.send('We are on home URL');
})
//'/' => go to local host


//Connect to DB
mongoose.connect( process.env.DB_CONNECION, { useNewUrlParser: true },
    () => console.log('Connected to DB')
);

//How to we start listening app inside server
app.listen(3000); 