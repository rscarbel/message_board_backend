const mongoose = require ('mongoose');
const express = require ('express');
const app = express()
require 'dotenv'.config()

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (error) => console.log('MongoDB Error ' + error.message));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});