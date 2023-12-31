const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
// db connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connection successful!'))
.catch((err) => console.log('DB connection failed!', err))

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

const port = 8000; // Use the port specified in the environment variable or default to 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))
