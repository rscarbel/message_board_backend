const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: {type: String,
    default: 'anonymous',
    min: 1,
    max: 30
  },
  message: {
    type: String,
    unique: true,
    required: true,
    min: 1,
    max: 500
  },
  IP: String
},{timestamps: true})

module.exports = mongoose.model('message', messageSchema)