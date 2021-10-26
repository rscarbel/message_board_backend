const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: String,
  message: String
},{timestamps: true})

module.exports = mongoose.model('message', messageSchema)