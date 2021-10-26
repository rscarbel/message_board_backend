const mongoose = require ('mongoose');
const express = require ('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const messageController = require('./controllers/message');
const { urlencoded } = require('express');
require ('dotenv').config()

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (error) => console.log('MongoDB Error ' + error.message));

app.use(express.urlencoded({extends:true}))
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.use('/api', messageController)


const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});