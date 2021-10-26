const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: {type: String, required: true},
  message: {type: String, unique: true, required: true}
},{timestamps: true})

module.exports = mongoose.model('message', messageSchema)