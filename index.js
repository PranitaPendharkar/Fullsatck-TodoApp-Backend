/*const express=require('express')
const mongoose=require('mongoose')


const routes=require('./Routes/TodoRoutes')
require('dotenv').config()

const app=express()

const PORT=process.env.PORT || 5000

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log(`connected to mogodb`)).catch((err)=>console.log(error));



app.use(routes)
app.listen(PORT,()=>console.log(`Listening on :${PORT}`))

*/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import CORS
const routes = require('./Routes/TodoRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Apply CORS middleware before defining routes
app.use(cors());  // Enable CORS for all routes
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));

